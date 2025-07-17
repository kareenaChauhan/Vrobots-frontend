// utils/parseEditorJs.ts

export function parseEditorJsToHtml(data: any): string {
    if (!data || !Array.isArray(data.blocks)) return '';
  
    return data.blocks
      .map((block: any) => {
        switch (block.type) {
          case 'paragraph':
            return `<p>${block.data.text}</p>`;
          case 'header':
            return `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
          case 'list':
            const tag = block.data.style === 'ordered' ? 'ol' : 'ul';
            return `<${tag}>${block.data.items.map((item: string) => `<li>${item}</li>`).join('')}</${tag}>`;
          default:
            return '';
        }
      })
      .join('');
  }
  