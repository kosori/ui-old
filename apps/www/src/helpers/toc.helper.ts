// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { toc } from 'mdast-util-toc';
import type { Node } from 'mdast-util-toc/lib';
import { remark } from 'remark';
import { visit } from 'unist-util-visit';

import type { TocItem, TocItems } from '~/types';

const textTypes = ['text', 'emphasis', 'strong', 'inlineCode'];

const flattenNode = (node: Node) => {
  const p: string[] = [];
  visit(node, (node) => {
    if (!textTypes.includes(node.type)) return;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    p.push(node.value);
  });

  return p.join('');
};

const getItems = (node: Node, current: TocItem): TocItems => {
  if (!node) return {};

  if (node.type === 'paragraph') {
    visit(node, (item) => {
      if (item.type === 'link') {
        current.url = item.url;
        current.title = flattenNode(node);
      }

      if (item.type === 'text') {
        current.title = flattenNode(node);
      }
    });

    return current;
  }

  if (node.type === 'list') {
    current.items = node.children?.map((i) => getItems(i, {}));

    return current;
  } else if (node.type === 'listItem') {
    const heading = getItems(node.children[0], {});

    if (node.children.length > 1) getItems(node.children[1], heading);

    return heading;
  }

  return {};
};

const getToc = () => (tree: Node, file: { data: TocItems }) => {
  const table = toc(tree);
  file.data = getItems(table.map, {});
};

export const getTableOfContents = async (content: string) => {
  const result = await remark().use(getToc).process(content);

  return result.data;
};
