'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Save, Eye, Loader2, Image as ImageIcon, X, Trash2 } from 'lucide-react';
import Link from 'next/link';
import PostEditor from '@/components/admin/posts/PostEditor';
import slugify from 'slugify';

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Tag {
  id: string;
  name: string;
  slug: string;
}

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: any;
  contentHtml: string;
  featuredImage: string | null;
  featuredImageAlt: string | null;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  commentsEnabled: boolean;
  metaTitle: string | null;
  metaDescription: string | null;
  categories: Category[];
  tags: Tag[];
}

export default function EditPostPage() {
  const router = useRouter();
  const params = useParams();
  const postId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  // Form state
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState<any>({ type: 'doc', content: [] });
  const [contentHtml, setContentHtml] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [featuredImageAlt, setFeaturedImageAlt] = useState('');
  const [status, setStatus] = useState<'DRAFT' | 'PUBLISHED' | 'ARCHIVED'>('DRAFT');
  const [commentsEnabled, setCommentsEnabled] = useState(true);
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Veriyi yükle
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postRes, catRes, tagRes] = await Promise.all([
          fetch(`/api/admin/posts/${postId}`),
          fetch('/api/admin/categories'),
          fetch('/api/admin/tags'),
        ]);

        if (postRes.ok) {
          const { post } = await postRes.json();
          setTitle(post.title);
          setSlug(post.slug);
          setExcerpt(post.excerpt);
          setContent(post.content);
          setContentHtml(post.contentHtml || '');
          setFeaturedImage(post.featuredImage || '');
          setFeaturedImageAlt(post.featuredImageAlt || '');
          setStatus(post.status);
          setCommentsEnabled(post.commentsEnabled);
          setMetaTitle(post.metaTitle || '');
          setMetaDescription(post.metaDescription || '');
          setSelectedCategories(post.categories.map((c: Category) => c.id));
          setSelectedTags(post.tags.map((t: Tag) => t.id));
        } else {
          alert('Yazı bulunamadı');
          router.push('/admin/yazilar');
        }

        if (catRes.ok) {
          const data = await catRes.json();
          setCategories(data.categories || []);
        }

        if (tagRes.ok) {
          const data = await tagRes.json();
          setTags(data.tags || []);
        }
      } catch (error) {
        console.error('Data fetch error:', error);
        alert('Veri yüklenirken hata oluştu');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [postId, router]);

  const handleSubmit = async (publishStatus?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED') => {
    if (!title.trim()) {
      alert('Başlık gereklidir.');
      return;
    }

    if (!excerpt.trim()) {
      alert('Özet gereklidir.');
      return;
    }

    setSaving(true);

    try {
      const res = await fetch(`/api/admin/posts/${postId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          slug,
          excerpt,
          content,
          contentHtml,
          featuredImage: featuredImage || null,
          featuredImageAlt: featuredImageAlt || null,
          status: publishStatus || status,
          commentsEnabled,
          metaTitle: metaTitle || null,
          metaDescription: metaDescription || null,
          categoryIds: selectedCategories,
          tagIds: selectedTags,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        if (publishStatus) setStatus(publishStatus);
        alert('Yazı başarıyla güncellendi!');
      } else {
        alert(data.error || 'Yazı güncellenirken hata oluştu.');
      }
    } catch (error) {
      alert('Yazı güncellenirken hata oluştu.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Bu yazıyı silmek istediğinize emin misiniz? Bu işlem geri alınamaz.')) {
      return;
    }

    setSaving(true);
    try {
      const res = await fetch(`/api/admin/posts/${postId}`, { method: 'DELETE' });
      if (res.ok) {
        router.push('/admin/yazilar');
      } else {
        alert('Yazı silinirken hata oluştu.');
      }
    } catch (error) {
      alert('Yazı silinirken hata oluştu.');
    } finally {
      setSaving(false);
    }
  };

  const handleImageUpload = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append('file', file);

      try {
        const res = await fetch('/api/admin/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();

        if (res.ok) {
          setFeaturedImage(data.media.url);
        } else {
          alert(data.error || 'Görsel yüklenirken hata oluştu.');
        }
      } catch (error) {
        alert('Görsel yüklenirken hata oluştu.');
      }
    };
    input.click();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/yazilar" className="rounded-lg p-2 hover:bg-gray-100">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Yazıyı Düzenle</h1>
            <p className="text-gray-600">
              Durum:{' '}
              <span className={`font-medium ${status === 'PUBLISHED' ? 'text-green-600' : status === 'DRAFT' ? 'text-yellow-600' : 'text-gray-600'}`}>
                {status === 'PUBLISHED' ? 'Yayında' : status === 'DRAFT' ? 'Taslak' : 'Arşiv'}
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleDelete}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 disabled:opacity-50"
          >
            <Trash2 className="h-4 w-4" />
            Sil
          </button>
          <button
            onClick={() => handleSubmit('DRAFT')}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            Taslak Kaydet
          </button>
          {status === 'PUBLISHED' ? (
            <button
              onClick={() => handleSubmit()}
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 disabled:opacity-50"
            >
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              Güncelle
            </button>
          ) : (
            <button
              onClick={() => handleSubmit('PUBLISHED')}
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 disabled:opacity-50"
            >
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Eye className="h-4 w-4" />}
              Yayınla
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <label className="mb-2 block text-sm font-medium text-gray-700">Başlık *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="Yazı başlığını girin"
            />

            <div className="mt-3">
              <label className="mb-1 block text-sm font-medium text-gray-700">URL Slug</label>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">/blog/</span>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  placeholder="yazi-slug"
                />
              </div>
            </div>
          </div>

          {/* Excerpt */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <label className="mb-2 block text-sm font-medium text-gray-700">Özet *</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="Yazının kısa özetini girin (SEO için önemli)"
            />
          </div>

          {/* Content Editor */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <label className="mb-2 block text-sm font-medium text-gray-700">İçerik</label>
            <PostEditor
              content={content}
              onChange={(json, html) => {
                setContent(json);
                setContentHtml(html);
              }}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Featured Image */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <label className="mb-3 block text-sm font-medium text-gray-700">Öne Çıkan Görsel</label>
            {featuredImage ? (
              <div className="relative">
                <img
                  src={featuredImage}
                  alt={featuredImageAlt || 'Öne çıkan görsel'}
                  className="w-full rounded-lg object-cover"
                />
                <button
                  onClick={() => setFeaturedImage('')}
                  className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                >
                  <X className="h-4 w-4" />
                </button>
                <input
                  type="text"
                  value={featuredImageAlt}
                  onChange={(e) => setFeaturedImageAlt(e.target.value)}
                  placeholder="Görsel açıklaması (alt text)"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none"
                />
              </div>
            ) : (
              <button
                onClick={handleImageUpload}
                className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 py-8 text-gray-500 hover:border-primary-500 hover:text-primary-500"
              >
                <ImageIcon className="h-8 w-8" />
                <span className="mt-2 text-sm">Görsel Yükle</span>
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <label className="mb-3 block text-sm font-medium text-gray-700">Kategoriler</label>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {categories.map((cat) => (
                <label key={cat.id} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCategories([...selectedCategories, cat.id]);
                      } else {
                        setSelectedCategories(selectedCategories.filter((id) => id !== cat.id));
                      }
                    }}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-700">{cat.name}</span>
                </label>
              ))}
              {categories.length === 0 && (
                <p className="text-sm text-gray-500">
                  Henüz kategori yok.{' '}
                  <Link href="/admin/kategoriler" className="text-primary-600 hover:underline">
                    Kategori oluşturun
                  </Link>
                </p>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <label className="mb-3 block text-sm font-medium text-gray-700">Etiketler</label>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => {
                    if (selectedTags.includes(tag.id)) {
                      setSelectedTags(selectedTags.filter((id) => id !== tag.id));
                    } else {
                      setSelectedTags([...selectedTags, tag.id]);
                    }
                  }}
                  className={`rounded-full px-3 py-1 text-sm transition-colors ${
                    selectedTags.includes(tag.id)
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag.name}
                </button>
              ))}
              {tags.length === 0 && (
                <p className="text-sm text-gray-500">
                  Henüz etiket yok.{' '}
                  <Link href="/admin/etiketler" className="text-primary-600 hover:underline">
                    Etiket oluşturun
                  </Link>
                </p>
              )}
            </div>
          </div>

          {/* Comments */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={commentsEnabled}
                onChange={(e) => setCommentsEnabled(e.target.checked)}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm font-medium text-gray-700">Yorumlara izin ver</span>
            </label>
          </div>

          {/* SEO */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-medium text-gray-900">SEO Ayarları</h3>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-gray-700">Meta Başlık</label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none"
                  placeholder={title || 'Başlık'}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-700">Meta Açıklama</label>
                <textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none"
                  placeholder={excerpt || 'Yazı açıklaması'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
