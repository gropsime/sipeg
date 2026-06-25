import { ValueObject } from "../../../shared/value-object/ValueObject";

type ScientificVersionProps = {
  value: string;
};

export class ScientificVersion extends ValueObject<ScientificVersionProps> {
  private constructor(props: ScientificVersionProps) {
    super(props);
  }

  public static create(value: string): ScientificVersion {
    const normalizedValue = value.trim();

    if (!normalizedValue) {
      throw new Error("ScientificVersion requires a value.");
    }

    if (!/^v\d+\.\d+\.\d+$/.test(normalizedValue)) {
      throw new Error("ScientificVersion must follow the pattern vX.Y.Z.");
    }

    return new ScientificVersion({
      value: normalizedValue,
    });
  }

  public toString(): string {
    return this.props.value;
  }
}