import { ValueObject } from "../../../shared/value-object/ValueObject";

type CanonicalCodeProps = {
  value: string;
};

export class CanonicalCode extends ValueObject<CanonicalCodeProps> {
  private constructor(props: CanonicalCodeProps) {
    super(props);
  }

  public static create(value: string): CanonicalCode {
    const normalizedValue = value.trim().toUpperCase();

    if (!normalizedValue) {
      throw new Error("CanonicalCode requires a value.");
    }

    if (normalizedValue.length < 3) {
      throw new Error("CanonicalCode must contain at least 3 characters.");
    }

    if (normalizedValue.length > 50) {
      throw new Error("CanonicalCode must contain at most 50 characters.");
    }

    return new CanonicalCode({
      value: normalizedValue,
    });
  }

  public toString(): string {
    return this.props.value;
  }
}