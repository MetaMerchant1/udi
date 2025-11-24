import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Container from '@/components/shared/Container';

const footerLinks = {
  danismanlik: [
    { name: 'Yurtdışı Üniversite Danışmanlığı', href: '/yurtdisi-universite-danismanligi' },
    { name: 'Yurt İçi Üniversite Danışmanlığı', href: '/yurtici-universite-danismanligi' },
    { name: 'Kariyer Planlama', href: '/kariyer-planlama' },
    { name: 'Akademik Takip', href: '/akademik-takip' },
    { name: 'Eğitim Koçluğu', href: '/egitim-koclugu' },
    { name: 'Kişilik Envanterleri', href: '/kisilik-envanterleri' },
  ],
  calismaAlanlari: [
    { name: 'Liderlik Eğitimi', href: '/liderlik-egitimi' },
    { name: 'İş İngilizcesi', href: '/is-ingilizcesi' },
    { name: 'Uluslararası Sınavlar', href: '/uluslararasi-sinavlar' },
    { name: 'Tüm Hizmetler', href: '/hizmetler' },
  ],
  kurumsal: [
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/iletisim' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#220b47] text-gray-300">
      <Container>
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/udi-logo.svg"
                  alt="UDI"
                  width={60}
                  height={60}
                  className="h-14 w-auto"
                  sizes="60px"
                />
                <div>
                  <h3 className="font-handwriting text-2xl text-white leading-tight">
                    United Development<br/>and Innovation
                  </h3>
                </div>
              </div>
              <p className="text-sm text-gray-400 italic mb-4">
                Driven by Innovation United by Purpose
              </p>
              <p className="text-gray-400 mb-6">
                Yurtdışı eğitim hayallerinizi gerçeğe dönüştürmek için 25+ yıllık deneyimimizle
                yanınızdayız.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="tel:+905XXXXXXXXX" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-5 w-5 text-primary-400" />
                  <span>+90 5XX XXX XX XX</span>
                </a>
                <a href="mailto:info@example.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-5 w-5 text-primary-400" />
                  <span>info@example.com</span>
                </a>
              </div>
            </div>

            {/* Danışmanlık Hizmetleri */}
            <div>
              <h3 className="text-white font-semibold mb-4">Danışmanlık Hizmetleri</h3>
              <ul className="space-y-2">
                {footerLinks.danismanlik.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors text-sm inline-block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Çalışma Alanları */}
            <div>
              <h3 className="text-white font-semibold mb-4">Çalışma Alanları</h3>
              <ul className="space-y-2">
                {footerLinks.calismaAlanlari.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors text-sm inline-block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Corporate */}
            <div>
              <h3 className="text-white font-semibold mb-4">Kurumsal</h3>
              <ul className="space-y-2">
                {footerLinks.kurumsal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors inline-block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} UDI - United Development and Innovation. Tüm hakları saklıdır.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
