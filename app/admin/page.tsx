import { FileText, Eye, FolderOpen, Tags } from 'lucide-react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

async function getStats() {
  try {
    const [
      totalPosts,
      publishedPosts,
      draftPosts,
      totalCategories,
      totalTags,
      totalViews,
    ] = await Promise.all([
      prisma.post.count(),
      prisma.post.count({ where: { status: 'PUBLISHED' } }),
      prisma.post.count({ where: { status: 'DRAFT' } }),
      prisma.category.count(),
      prisma.tag.count(),
      prisma.post.aggregate({ _sum: { viewCount: true } }),
    ]);

    return {
      totalPosts,
      publishedPosts,
      draftPosts,
      totalCategories,
      totalTags,
      totalViews: totalViews._sum.viewCount || 0,
    };
  } catch {
    return {
      totalPosts: 0,
      publishedPosts: 0,
      draftPosts: 0,
      totalCategories: 0,
      totalTags: 0,
      totalViews: 0,
    };
  }
}

async function getRecentPosts() {
  try {
    return await prisma.post.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: {
        author: { select: { name: true } },
      },
    });
  } catch {
    return [];
  }
}

export default async function AdminDashboard() {
  const stats = await getStats();
  const recentPosts = await getRecentPosts();

  const statCards = [
    {
      title: 'Toplam Yazı',
      value: stats.totalPosts,
      subtitle: `${stats.publishedPosts} yayında, ${stats.draftPosts} taslak`,
      icon: FileText,
      color: 'bg-blue-500',
      href: '/admin/yazilar',
    },
    {
      title: 'Kategoriler',
      value: stats.totalCategories,
      subtitle: 'Aktif kategori',
      icon: FolderOpen,
      color: 'bg-green-500',
      href: '/admin/kategoriler',
    },
    {
      title: 'Etiketler',
      value: stats.totalTags,
      subtitle: 'Toplam etiket',
      icon: Tags,
      color: 'bg-orange-500',
      href: '/admin/etiketler',
    },
    {
      title: 'Toplam Görüntülenme',
      value: stats.totalViews.toLocaleString('tr-TR'),
      subtitle: 'Tüm zamanlar',
      icon: Eye,
      color: 'bg-purple-500',
      href: '#',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Kontrol Paneli</h1>
        <p className="text-gray-600">Blog yönetim sisteminize hoş geldiniz.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{card.title}</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {card.value}
                </p>
                <p className="mt-1 text-sm text-gray-500">{card.subtitle}</p>
              </div>
              <div
                className={`rounded-lg ${card.color} p-3 text-white transition-transform group-hover:scale-110`}
              >
                <card.icon className="h-6 w-6" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Posts */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Son Yazılar</h2>
          <Link
            href="/admin/yazilar"
            className="text-sm text-primary-600 hover:underline"
          >
            Tümünü Gör →
          </Link>
        </div>

        {recentPosts.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between py-3"
              >
                <div>
                  <Link
                    href={`/admin/yazilar/${post.id}`}
                    className="font-medium text-gray-900 hover:text-primary-600"
                  >
                    {post.title}
                  </Link>
                  <p className="text-sm text-gray-500">
                    {post.author?.name} •{' '}
                    {new Date(post.createdAt).toLocaleDateString('tr-TR')}
                  </p>
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    post.status === 'PUBLISHED'
                      ? 'bg-green-100 text-green-700'
                      : post.status === 'DRAFT'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {post.status === 'PUBLISHED'
                    ? 'Yayında'
                    : post.status === 'DRAFT'
                    ? 'Taslak'
                    : 'Arşiv'}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center text-gray-500">
            <FileText className="mx-auto h-12 w-12 text-gray-300" />
            <p className="mt-2">Henüz yazı bulunmuyor.</p>
            <Link
              href="/admin/yazilar/yeni"
              className="mt-4 inline-block rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
            >
              İlk Yazınızı Oluşturun
            </Link>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="rounded-xl bg-gradient-to-br from-[#1a0836] to-[#2a1256] p-6 text-white">
        <h2 className="text-lg font-semibold">Hızlı İşlemler</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/admin/yazilar/yeni"
            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            + Yeni Yazı
          </Link>
          <Link
            href="/admin/kategoriler"
            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            + Yeni Kategori
          </Link>
          <Link
            href="/admin/medya"
            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Medya Yükle
          </Link>
        </div>
      </div>
    </div>
  );
}
