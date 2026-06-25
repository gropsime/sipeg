import { ValueObject } from "../../../shared/value-object/ValueObject";

type ShortTitleProps = {
  value: string;
};

export class ShortTitle extends ValueObject<ShortTitleProps> {
  private constructor(props: ShortTitleProps) {
    super(props);
  }

  public static create(value: string): ShortTitle {
    const normalizedValue = value.trim();

    if (!normalizedValue) {
      throw new Error("ShortTitle requires a value.");
    }

    if (normalizedValue.length < 3) {
      throw new Error("ShortTitle must contain at least 3 characters.");
    }

    if (normalizedValue.length > 100) {
      throw new Error("ShortTitle must contain at most 100 characters.");
    }

    return new ShortTitle({
      value: normalizedValue,
    });
  }

  public toString(): string {
    return this.props.value;
  }
}