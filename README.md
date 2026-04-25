# SAM24H · Gerador de Relatório por CSS (Frontend Local)

Sistema local (sem backend) para transformar um arquivo `.css` de origem em um **HTML final pronto**, mantendo o template visual fixo da SAM.

## 1) Estrutura de arquivos

- `index.html` → interface do usuário (upload, revisão, prévia, download).
- `style.css` → estilos da interface do gerador.
- `script.js` → lógica completa de upload, extração, normalização, mapeamento, renderização e download.
- `template.html` → referência da estrutura base fixa SAM (campos variáveis em placeholders).

## 2) Fluxo de uso

1. Abra `index.html` no navegador.
2. Faça upload de um arquivo `.css`.
3. Clique em **Extrair dados**.
4. Revise/edite os campos extraídos.
5. Clique em **Gerar prévia**.
6. Clique em **Baixar HTML final**.

## 3) Regras aplicadas

- Não redesenha layout a cada arquivo.
- Mantém identidade visual SAM (hero, KPIs, tabelas, barras, plano de ação, footer).
- Não depende de backend.
- Não usa bibliotecas externas obrigatórias.
- Dados ausentes ficam como “Não informado” sem quebrar o layout.

## 4) Observação técnica

O HTML baixado é **completo e independente**, com `<!DOCTYPE html>` e CSS embutido, pronto para abrir no navegador, imprimir ou converter em PDF.
