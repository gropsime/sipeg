export class Result<T> {
  private readonly success: boolean;
  private readonly failure: boolean;
  private readonly resultValue?: T;
  private readonly errorValue?: string;

  private constructor(success: boolean, error?: string, value?: T) {
    if (success && error) {
      throw new Error("A successful Result cannot contain an error.");
    }

    if (!success && !error) {
      throw new Error("A failed Result must contain an error.");
    }

    this.success = success;
    this.failure = !success;
    this.errorValue = error;
    this.resultValue = value;
  }

  public get isSuccess(): boolean {
    return this.success;
  }

  public get isFailure(): boolean {
    return this.failure;
  }

  public get value(): T {
    if (!this.success) {
      throw new Error("Cannot get the value of a failed Result.");
    }

    return this.resultValue as T;
  }

  public get error(): string {
    if (!this.failure) {
      throw new Error("Cannot get the error of a successful Result.");
    }

    return this.errorValue as string;
  }

  public static ok<T>(value: T): Result<T> {
    return new Result<T>(true, undefined, value);
  }

  public static fail<T>(error: string): Result<T> {
    return new Result<T>(false, error);
  }
}