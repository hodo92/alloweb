import { ApprovedTasksPipe } from './approved-tasks.pipe';

describe('ApprovedTasksPipe', () => {
  it('create an instance', () => {
    const pipe = new ApprovedTasksPipe();
    expect(pipe).toBeTruthy();
  });
});
