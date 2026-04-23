import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { highlight } from 'sugar-high';
import type { Root, Element, Text } from 'hast';
import type { Plugin } from 'unified';

const rehypeHighlightCode: Plugin<[], Root> = () => {
	return (tree) => {
		visit(tree, (node: Element) => {
			if (node.tagName === 'code' && node.children.length === 1) {
				const child = node.children[0];
				if (child.type === 'text') {
					const highlighted = highlight(child.value);
					node.children = [{ type: 'raw', value: highlighted } as unknown as Text];
				}
			}
		});
	};
};

const rehypeExternalLinks: Plugin<[], Root> = () => {
	return (tree) => {
		visit(tree, (node: Element) => {
			if (node.tagName === 'a') {
				const href = node.properties?.href as string | undefined;
				if (href && !href.startsWith('/') && !href.startsWith('#')) {
					node.properties = {
						...node.properties,
						target: '_blank',
						rel: 'noopener noreferrer'
					};
				}
			}
		});
	};
};

function visit(tree: Root | Element, fn: (node: Element) => void) {
	if ('children' in tree) {
		for (const child of tree.children) {
			if (child.type === 'element') {
				fn(child);
				visit(child, fn);
			}
		}
	}
}

const processor = unified()
	.use(remarkParse)
	.use(remarkRehype, { allowDangerousHtml: true })
	.use(rehypeSlug)
	.use(rehypeAutolinkHeadings, {
		behavior: 'prepend',
		properties: { class: 'anchor' }
	})
	.use(rehypeHighlightCode)
	.use(rehypeExternalLinks)
	.use(rehypeStringify, { allowDangerousHtml: true });

export async function renderMarkdown(content: string): Promise<string> {
	const result = await processor.process(content);
	return String(result);
}
