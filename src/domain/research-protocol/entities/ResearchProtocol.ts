import { AggregateRoot } from "../../../shared/entity/AggregateRoot";
import { CanonicalCode } from "../value-objects/CanonicalCode";
import { ScientificTitle } from "../value-objects/ScientificTitle";
import { ScientificVersion } from "../value-objects/ScientificVersion";
import { ShortTitle } from "../value-objects/ShortTitle";

export type ResearchProtocolStatus =
  | "draft"
  | "under_review"
  | "approved"
  | "published"
  | "data_collection"
  | "closed"
  | "archived";

export type ResearchProtocolProps = {
  id: string;
  canonicalCode: CanonicalCode;
  officialTitle: ScientificTitle;
  shortTitle: ShortTitle;
  scientificVersion: ScientificVersion;
  status: ResearchProtocolStatus;
  responsibleResearcherId: string;
  proposingInstitutionId: string;
  createdAt: Date;
  updatedAt: Date;
};

export class ResearchProtocol extends AggregateRoot<string> {
  private readonly props: ResearchProtocolProps;

  private constructor(props: ResearchProtocolProps) {
    super(props.id);
    this.props = props;
  }

  public static create(props: ResearchProtocolProps): ResearchProtocol {
    if (!props.id) throw new Error("ResearchProtocol requires an id.");
    if (!props.canonicalCode) throw new Error("ResearchProtocol requires a canonical code.");
    if (!props.officialTitle) throw new Error("ResearchProtocol requires an official title.");
    if (!props.shortTitle) throw new Error("ResearchProtocol requires a short title.");
    if (!props.scientificVersion) throw new Error("ResearchProtocol requires a scientific version.");
    if (!props.responsibleResearcherId) throw new Error("ResearchProtocol requires a responsible researcher.");
    if (!props.proposingInstitutionId) throw new Error("ResearchProtocol requires a proposing institution.");

    return new ResearchProtocol(props);
  }

  public get snapshot(): ResearchProtocolProps {
    return { ...this.props };
  }
}