export class CreateCountryDto {
  readonly name: string;
  readonly isoCode2: string;
  readonly isoCode3: string;
  readonly states: object;
  readonly phonePrefix: string;
}
