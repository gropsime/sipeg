import type { ResearchProtocolStatus } from "../entities/ResearchProtocol";

export class ResearchProtocolStatusPolicy {
  private static readonly transitions: Record<
    ResearchProtocolStatus,
    ResearchProtocolStatus[]
  > = {
    draft: ["under_review"],

    under_review: ["approved"],

    approved: ["published"],

    published: ["data_collection"],

    data_collection: ["closed"],

    closed: ["archived"],

    archived: [],
  };

  public static canTransition(
    from: ResearchProtocolStatus,
    to: ResearchProtocolStatus
  ): boolean {
    return this.transitions[from].includes(to);
  }
}