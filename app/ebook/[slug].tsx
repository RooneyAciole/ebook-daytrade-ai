import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

interface ChapterPageProps {
  params: {
    slug: string;
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = params;
  // Remove .md extension if present
  const fileName = slug.replace(/\.md$/, '');
  const filePath = path.join(process.cwd(), 'ebook', `${fileName}.md`);

  try {
    const content = await fs.readFile(filePath, 'utf8');

    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <div className="mt-8">
          <a href="/ebook" className="text-blue-600 hover:text-blue-800">
            ← Voltar ao Índice
          </a>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Capítulo não encontrado</h1>
        <p>O capítulo solicitado não existe.</p>
        <a href="/ebook" className="text-blue-600 hover:text-blue-800">
          ← Voltar ao Índice
        </a>
      </div>
    );
  }
}