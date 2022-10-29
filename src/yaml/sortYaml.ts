import {ParsedNode, parseDocument, YAMLMap, YAMLSeq} from 'yaml';

function sortDeep(node: ParsedNode | null): void {
  if (node instanceof YAMLMap) {
    node.items.sort((itemA, itemB) => (itemA.key < itemB.key ? -1 : itemA.key > itemB.key ? 1 : 0));
    node.items.forEach(item => sortDeep(item.value));
  } else if (node instanceof YAMLSeq) {
    node.items.forEach(item => sortDeep(item));
  }
}

export function sortYaml(text: string): string {
  try {
    const document = parseDocument(text);
    sortDeep(document.contents);
    return document.toString().trim();
  } catch {
    return `Invalid input`;
  }
}
