export abstract class Entity<TId> {
  protected readonly id: TId;

  protected constructor(id: TId) {
    if (id === null || id === undefined) {
      throw new Error("Entity requires a valid identifier.");
    }

    this.id = id;
  }

  public getId(): TId {
    return this.id;
  }

  public equals(other: Entity<TId>): boolean {
    return this.id === other.id;
  }
}