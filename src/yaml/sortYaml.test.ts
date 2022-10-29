import {sortYaml} from './sortYaml';
import fs from 'fs';
import path from "path";

describe('sortYaml', () => {
  it('sorts YAML content by key', async () => {
    const input = await fs.promises.readFile(path.join(__dirname, '../fixtures/unsorted.yml'), 'utf-8');
    const actual = sortYaml(input);
    expect(actual).toMatchSnapshot();
  });
});
