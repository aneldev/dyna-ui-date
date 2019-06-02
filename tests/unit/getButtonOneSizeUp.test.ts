import "jest";
import {ESize} from "dyna-ui-button";
import {getButtonOneSizeUp} from '../../src/utils/getButtonOneSizeUp';

if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

describe('getButtonOneSizeUp', () => {
  it('should return correct for XSMALL', () => {
    expect(getButtonOneSizeUp(ESize.XSMALL)).toBe(ESize.SMALL);
  });
  it('should return correct for SMALL', () => {
    expect(getButtonOneSizeUp(ESize.SMALL)).toBe(ESize.MEDIUM);
  });
  it('should return correct for MEDIUM', () => {
    expect(getButtonOneSizeUp(ESize.MEDIUM)).toBe(ESize.LARGE);
  });
  it('should return correct for LARGE', () => {
    expect(getButtonOneSizeUp(ESize.LARGE)).toBe(ESize.XLARGE);
  });
  it('should return correct for XLARGE', () => {
    expect(getButtonOneSizeUp(ESize.XLARGE)).toBe(ESize.XXLARGE);
  });
  it('should return correct for XXLARGE', () => {
    expect(getButtonOneSizeUp(ESize.XXLARGE)).toBe(ESize.XXLARGE);
  });
});
