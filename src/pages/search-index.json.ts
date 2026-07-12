import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { glossary } from '../data/glossary';
import { withBase } from '../lib/base';
import GithubSlugger from 'github-slugger';

// Bersihkan sumber MDX menjadi teks polos untuk diindeks.
function clean(src: string): string {
  return src
    .replace(/^import .*$/gm, ' ') // baris import
    .replace(/\{[^{}]*\}/g, ' ') // ekspresi MDX seperti {' '}
    .replace(/<[^>]+>/g, ' ') // tag komponen/HTML — sisakan teks di dalamnya
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // tautan markdown -> teksnya
    .replace(/^#{1,6}\s+/gm, ' ') // penanda heading
    .replace(/^\s*[-*>]\s+/gm, ' ') // penanda daftar/kutipan
    .replace(/[*_`~]/g, ' ') // penekanan
    .replace(/&amp;/g, '&')
    .replace(/&#38;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export const GET: APIRoute = async () => {
  const topics = await getCollection('topics', ({ data }) => !data.draft);
  const records: Array<{
    type: 'topic' | 'kamus';
    title: string;
    section: string;
    anchor: string;
    url: string;
    text: string;
  }> = [];

  for (const t of topics) {
    const url = withBase(`/topik/${t.id}`);
    const body: string = (t as any).body ?? '';
    const parts = body.split(/^##\s+/m); // parts[0] = pengantar (termasuk import)
    const slugger = new GithubSlugger();

    const intro = clean(parts[0] || '');
    if (intro) {
      records.push({ type: 'topic', title: t.data.title, section: '', anchor: '', url, text: intro });
    }
    for (let i = 1; i < parts.length; i++) {
      const seg = parts[i];
      const nl = seg.indexOf('\n');
      const heading = clean(nl === -1 ? seg : seg.slice(0, nl));
      const rest = nl === -1 ? '' : seg.slice(nl + 1);
      const anchor = slugger.slug(heading);
      const text = clean(rest);
      if (heading || text) {
        records.push({ type: 'topic', title: t.data.title, section: heading, anchor, url, text });
      }
    }
  }

  for (const g of glossary) {
    records.push({
      type: 'kamus',
      title: g.term,
      section: 'Kamus',
      anchor: '',
      url: withBase(`/kamus#${g.slug}`),
      text: clean(`${g.definition} ${(g.aliases ?? []).join(' ')}`),
    });
  }

  return new Response(JSON.stringify(records), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};
