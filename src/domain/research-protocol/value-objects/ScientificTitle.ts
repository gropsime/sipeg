import { ValueObject } from "../../../shared/value-object/ValueObject";

type ScientificTitleProps = {
  value: string;
};

export class ScientificTitle extends ValueObject<ScientificTitleProps> {
  private constructor(props: ScientificTitleProps) {
    super(props);
  }

  public static create(value: string): ScientificTitle {
    const normalizedValue = value.trim();

    if (!normalizedValue) {
      throw new Error("ScientificTitle requires a value.");
    }

    if (normalizedValue.length < 10) {
      throw new Error("ScientificTitle must contain at least 10 characters.");
    }

    if (normalizedValue.length > 300) {
      throw new Error("ScientificTitle must contain at most 300 characters.");
    }

    return new ScientificTitle({
      value: normalizedValue,
    });
  }

  public toString(): string {
    return this.props.value;
  }
}