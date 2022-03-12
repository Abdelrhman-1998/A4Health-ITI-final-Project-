import { AppointmentPipe} from './appointment-pipe.pipe';

describe('AppointmentPipe', () => {
  it('create an instance', () => {
    const pipe = new AppointmentPipe();
    expect(pipe).toBeTruthy();
  });
});
