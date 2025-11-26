import React from 'react';

export default function EbookPage() {
  const chapters = [
    { title: 'Introdução', file: 'introducao.md' },
    { title: 'Fundamentos do Daytrade', file: 'fundamentos.md' },
    { title: 'Indicadores Técnicos Essenciais', file: 'indicadores.md' },
    { title: 'Análise Técnica do Mercado', file: 'analise.md' },
    { title: 'Estratégias de Operação', file: 'estrategias.md' },
    { title: 'Simulações Práticas', file: 'simulacoes.md' },
    { title: 'Aulas Práticas', file: 'aulas.md' },
    { title: 'Gestão de Riscos', file: 'riscos.md' },
    { title: 'Conclusão', file: 'conclusao.md' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Ebook: Guia Completo de Daytrade para Iniciantes</h1>
      <p className="mb-6">
        Este ebook guia iniciantes nas operações de daytrade, incluindo indicadores, análise de mercado,
        operações, simulações e aulas práticas com ativos das brokers VelocBroker e IOX Broker.
      </p>
      <div className="grid gap-4">
        {chapters.map((chapter, index) => (
          <div key={index} className="border p-4 rounded-lg hover:bg-gray-50">
            <h2 className="text-xl font-semibold mb-2">
              Capítulo {index + 1}: {chapter.title}
            </h2>
            <a
              href={`/ebook/${chapter.file.replace('.md', '')}`}
              className="text-blue-600 hover:text-blue-800"
            >
              Ler Capítulo →
            </a>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Download Completo</h3>
        <p>Para baixar o ebook completo em PDF, converta os arquivos Markdown usando uma ferramenta como Pandoc ou online converter.</p>
      </div>
    </div>
  );
}