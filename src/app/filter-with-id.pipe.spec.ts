import { FilterWithIdPipe } from './filter-with-id.pipe';

describe('FilterWithIdPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterWithIdPipe();
    expect(pipe).toBeTruthy();
  });
});
