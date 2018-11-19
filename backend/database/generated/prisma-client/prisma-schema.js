module.exports = {
        typeDefs: /* GraphQL */ `type AggregateContractor {
  count: Int!
}

type AggregateDataShareConsent {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Contractor {
  id: ID!
  name: String!
  symbol: String!
  street: String!
  city: String!
  postal: String!
  country: String!
  user(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type ContractorConnection {
  pageInfo: PageInfo!
  edges: [ContractorEdge]!
  aggregate: AggregateContractor!
}

input ContractorCreateInput {
  name: String!
  symbol: String!
  street: String!
  city: String!
  postal: String!
  country: String!
  user: UserCreateManyWithoutContractorInput
}

input ContractorCreateManyWithoutUserInput {
  create: [ContractorCreateWithoutUserInput!]
  connect: [ContractorWhereUniqueInput!]
}

input ContractorCreateWithoutUserInput {
  name: String!
  symbol: String!
  street: String!
  city: String!
  postal: String!
  country: String!
}

type ContractorEdge {
  node: Contractor!
  cursor: String!
}

enum ContractorOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  symbol_ASC
  symbol_DESC
  street_ASC
  street_DESC
  city_ASC
  city_DESC
  postal_ASC
  postal_DESC
  country_ASC
  country_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ContractorPreviousValues {
  id: ID!
  name: String!
  symbol: String!
  street: String!
  city: String!
  postal: String!
  country: String!
}

type ContractorSubscriptionPayload {
  mutation: MutationType!
  node: Contractor
  updatedFields: [String!]
  previousValues: ContractorPreviousValues
}

input ContractorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ContractorWhereInput
  AND: [ContractorSubscriptionWhereInput!]
  OR: [ContractorSubscriptionWhereInput!]
  NOT: [ContractorSubscriptionWhereInput!]
}

input ContractorUpdateInput {
  name: String
  symbol: String
  street: String
  city: String
  postal: String
  country: String
  user: UserUpdateManyWithoutContractorInput
}

input ContractorUpdateManyWithoutUserInput {
  create: [ContractorCreateWithoutUserInput!]
  delete: [ContractorWhereUniqueInput!]
  connect: [ContractorWhereUniqueInput!]
  disconnect: [ContractorWhereUniqueInput!]
  update: [ContractorUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ContractorUpsertWithWhereUniqueWithoutUserInput!]
}

input ContractorUpdateWithoutUserDataInput {
  name: String
  symbol: String
  street: String
  city: String
  postal: String
  country: String
}

input ContractorUpdateWithWhereUniqueWithoutUserInput {
  where: ContractorWhereUniqueInput!
  data: ContractorUpdateWithoutUserDataInput!
}

input ContractorUpsertWithWhereUniqueWithoutUserInput {
  where: ContractorWhereUniqueInput!
  update: ContractorUpdateWithoutUserDataInput!
  create: ContractorCreateWithoutUserInput!
}

input ContractorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  symbol: String
  symbol_not: String
  symbol_in: [String!]
  symbol_not_in: [String!]
  symbol_lt: String
  symbol_lte: String
  symbol_gt: String
  symbol_gte: String
  symbol_contains: String
  symbol_not_contains: String
  symbol_starts_with: String
  symbol_not_starts_with: String
  symbol_ends_with: String
  symbol_not_ends_with: String
  street: String
  street_not: String
  street_in: [String!]
  street_not_in: [String!]
  street_lt: String
  street_lte: String
  street_gt: String
  street_gte: String
  street_contains: String
  street_not_contains: String
  street_starts_with: String
  street_not_starts_with: String
  street_ends_with: String
  street_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  postal: String
  postal_not: String
  postal_in: [String!]
  postal_not_in: [String!]
  postal_lt: String
  postal_lte: String
  postal_gt: String
  postal_gte: String
  postal_contains: String
  postal_not_contains: String
  postal_starts_with: String
  postal_not_starts_with: String
  postal_ends_with: String
  postal_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  user_every: UserWhereInput
  user_some: UserWhereInput
  user_none: UserWhereInput
  AND: [ContractorWhereInput!]
  OR: [ContractorWhereInput!]
  NOT: [ContractorWhereInput!]
}

input ContractorWhereUniqueInput {
  id: ID
}

type DataShareConsent {
  consentDate: DateTime!
  consentGivenTo: String!
  collectionName: String!
  legalBasis: String!
  rangeOfConsentedData: String!
  consentGivenBy: String!
  createdBy: User!
  updatedBy: User!
  createdAt: DateTime!
  updatedAt: DateTime!
  id: ID!
}

type DataShareConsentConnection {
  pageInfo: PageInfo!
  edges: [DataShareConsentEdge]!
  aggregate: AggregateDataShareConsent!
}

input DataShareConsentCreateInput {
  consentDate: DateTime!
  consentGivenTo: String!
  collectionName: String!
  legalBasis: String!
  rangeOfConsentedData: String!
  consentGivenBy: String!
  createdBy: UserCreateOneWithoutCreatedByInput!
  updatedBy: UserCreateOneWithoutUpdatedByInput!
}

input DataShareConsentCreateManyWithoutCreatedByInput {
  create: [DataShareConsentCreateWithoutCreatedByInput!]
  connect: [DataShareConsentWhereUniqueInput!]
}

input DataShareConsentCreateManyWithoutUpdatedByInput {
  create: [DataShareConsentCreateWithoutUpdatedByInput!]
  connect: [DataShareConsentWhereUniqueInput!]
}

input DataShareConsentCreateWithoutCreatedByInput {
  consentDate: DateTime!
  consentGivenTo: String!
  collectionName: String!
  legalBasis: String!
  rangeOfConsentedData: String!
  consentGivenBy: String!
  updatedBy: UserCreateOneWithoutUpdatedByInput!
}

input DataShareConsentCreateWithoutUpdatedByInput {
  consentDate: DateTime!
  consentGivenTo: String!
  collectionName: String!
  legalBasis: String!
  rangeOfConsentedData: String!
  consentGivenBy: String!
  createdBy: UserCreateOneWithoutCreatedByInput!
}

type DataShareConsentEdge {
  node: DataShareConsent!
  cursor: String!
}

enum DataShareConsentOrderByInput {
  consentDate_ASC
  consentDate_DESC
  consentGivenTo_ASC
  consentGivenTo_DESC
  collectionName_ASC
  collectionName_DESC
  legalBasis_ASC
  legalBasis_DESC
  rangeOfConsentedData_ASC
  rangeOfConsentedData_DESC
  consentGivenBy_ASC
  consentGivenBy_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  id_ASC
  id_DESC
}

type DataShareConsentPreviousValues {
  consentDate: DateTime!
  consentGivenTo: String!
  collectionName: String!
  legalBasis: String!
  rangeOfConsentedData: String!
  consentGivenBy: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  id: ID!
}

type DataShareConsentSubscriptionPayload {
  mutation: MutationType!
  node: DataShareConsent
  updatedFields: [String!]
  previousValues: DataShareConsentPreviousValues
}

input DataShareConsentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DataShareConsentWhereInput
  AND: [DataShareConsentSubscriptionWhereInput!]
  OR: [DataShareConsentSubscriptionWhereInput!]
  NOT: [DataShareConsentSubscriptionWhereInput!]
}

input DataShareConsentUpdateInput {
  consentDate: DateTime
  consentGivenTo: String
  collectionName: String
  legalBasis: String
  rangeOfConsentedData: String
  consentGivenBy: String
  createdBy: UserUpdateOneRequiredWithoutCreatedByInput
  updatedBy: UserUpdateOneRequiredWithoutUpdatedByInput
}

input DataShareConsentUpdateManyWithoutCreatedByInput {
  create: [DataShareConsentCreateWithoutCreatedByInput!]
  delete: [DataShareConsentWhereUniqueInput!]
  connect: [DataShareConsentWhereUniqueInput!]
  disconnect: [DataShareConsentWhereUniqueInput!]
  update: [DataShareConsentUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [DataShareConsentUpsertWithWhereUniqueWithoutCreatedByInput!]
}

input DataShareConsentUpdateManyWithoutUpdatedByInput {
  create: [DataShareConsentCreateWithoutUpdatedByInput!]
  delete: [DataShareConsentWhereUniqueInput!]
  connect: [DataShareConsentWhereUniqueInput!]
  disconnect: [DataShareConsentWhereUniqueInput!]
  update: [DataShareConsentUpdateWithWhereUniqueWithoutUpdatedByInput!]
  upsert: [DataShareConsentUpsertWithWhereUniqueWithoutUpdatedByInput!]
}

input DataShareConsentUpdateWithoutCreatedByDataInput {
  consentDate: DateTime
  consentGivenTo: String
  collectionName: String
  legalBasis: String
  rangeOfConsentedData: String
  consentGivenBy: String
  updatedBy: UserUpdateOneRequiredWithoutUpdatedByInput
}

input DataShareConsentUpdateWithoutUpdatedByDataInput {
  consentDate: DateTime
  consentGivenTo: String
  collectionName: String
  legalBasis: String
  rangeOfConsentedData: String
  consentGivenBy: String
  createdBy: UserUpdateOneRequiredWithoutCreatedByInput
}

input DataShareConsentUpdateWithWhereUniqueWithoutCreatedByInput {
  where: DataShareConsentWhereUniqueInput!
  data: DataShareConsentUpdateWithoutCreatedByDataInput!
}

input DataShareConsentUpdateWithWhereUniqueWithoutUpdatedByInput {
  where: DataShareConsentWhereUniqueInput!
  data: DataShareConsentUpdateWithoutUpdatedByDataInput!
}

input DataShareConsentUpsertWithWhereUniqueWithoutCreatedByInput {
  where: DataShareConsentWhereUniqueInput!
  update: DataShareConsentUpdateWithoutCreatedByDataInput!
  create: DataShareConsentCreateWithoutCreatedByInput!
}

input DataShareConsentUpsertWithWhereUniqueWithoutUpdatedByInput {
  where: DataShareConsentWhereUniqueInput!
  update: DataShareConsentUpdateWithoutUpdatedByDataInput!
  create: DataShareConsentCreateWithoutUpdatedByInput!
}

input DataShareConsentWhereInput {
  consentDate: DateTime
  consentDate_not: DateTime
  consentDate_in: [DateTime!]
  consentDate_not_in: [DateTime!]
  consentDate_lt: DateTime
  consentDate_lte: DateTime
  consentDate_gt: DateTime
  consentDate_gte: DateTime
  consentGivenTo: String
  consentGivenTo_not: String
  consentGivenTo_in: [String!]
  consentGivenTo_not_in: [String!]
  consentGivenTo_lt: String
  consentGivenTo_lte: String
  consentGivenTo_gt: String
  consentGivenTo_gte: String
  consentGivenTo_contains: String
  consentGivenTo_not_contains: String
  consentGivenTo_starts_with: String
  consentGivenTo_not_starts_with: String
  consentGivenTo_ends_with: String
  consentGivenTo_not_ends_with: String
  collectionName: String
  collectionName_not: String
  collectionName_in: [String!]
  collectionName_not_in: [String!]
  collectionName_lt: String
  collectionName_lte: String
  collectionName_gt: String
  collectionName_gte: String
  collectionName_contains: String
  collectionName_not_contains: String
  collectionName_starts_with: String
  collectionName_not_starts_with: String
  collectionName_ends_with: String
  collectionName_not_ends_with: String
  legalBasis: String
  legalBasis_not: String
  legalBasis_in: [String!]
  legalBasis_not_in: [String!]
  legalBasis_lt: String
  legalBasis_lte: String
  legalBasis_gt: String
  legalBasis_gte: String
  legalBasis_contains: String
  legalBasis_not_contains: String
  legalBasis_starts_with: String
  legalBasis_not_starts_with: String
  legalBasis_ends_with: String
  legalBasis_not_ends_with: String
  rangeOfConsentedData: String
  rangeOfConsentedData_not: String
  rangeOfConsentedData_in: [String!]
  rangeOfConsentedData_not_in: [String!]
  rangeOfConsentedData_lt: String
  rangeOfConsentedData_lte: String
  rangeOfConsentedData_gt: String
  rangeOfConsentedData_gte: String
  rangeOfConsentedData_contains: String
  rangeOfConsentedData_not_contains: String
  rangeOfConsentedData_starts_with: String
  rangeOfConsentedData_not_starts_with: String
  rangeOfConsentedData_ends_with: String
  rangeOfConsentedData_not_ends_with: String
  consentGivenBy: String
  consentGivenBy_not: String
  consentGivenBy_in: [String!]
  consentGivenBy_not_in: [String!]
  consentGivenBy_lt: String
  consentGivenBy_lte: String
  consentGivenBy_gt: String
  consentGivenBy_gte: String
  consentGivenBy_contains: String
  consentGivenBy_not_contains: String
  consentGivenBy_starts_with: String
  consentGivenBy_not_starts_with: String
  consentGivenBy_ends_with: String
  consentGivenBy_not_ends_with: String
  createdBy: UserWhereInput
  updatedBy: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [DataShareConsentWhereInput!]
  OR: [DataShareConsentWhereInput!]
  NOT: [DataShareConsentWhereInput!]
}

input DataShareConsentWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createContractor(data: ContractorCreateInput!): Contractor!
  updateContractor(data: ContractorUpdateInput!, where: ContractorWhereUniqueInput!): Contractor
  updateManyContractors(data: ContractorUpdateInput!, where: ContractorWhereInput): BatchPayload!
  upsertContractor(where: ContractorWhereUniqueInput!, create: ContractorCreateInput!, update: ContractorUpdateInput!): Contractor!
  deleteContractor(where: ContractorWhereUniqueInput!): Contractor
  deleteManyContractors(where: ContractorWhereInput): BatchPayload!
  createDataShareConsent(data: DataShareConsentCreateInput!): DataShareConsent!
  updateDataShareConsent(data: DataShareConsentUpdateInput!, where: DataShareConsentWhereUniqueInput!): DataShareConsent
  updateManyDataShareConsents(data: DataShareConsentUpdateInput!, where: DataShareConsentWhereInput): BatchPayload!
  upsertDataShareConsent(where: DataShareConsentWhereUniqueInput!, create: DataShareConsentCreateInput!, update: DataShareConsentUpdateInput!): DataShareConsent!
  deleteDataShareConsent(where: DataShareConsentWhereUniqueInput!): DataShareConsent
  deleteManyDataShareConsents(where: DataShareConsentWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  contractor(where: ContractorWhereUniqueInput!): Contractor
  contractors(where: ContractorWhereInput, orderBy: ContractorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Contractor]!
  contractorsConnection(where: ContractorWhereInput, orderBy: ContractorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContractorConnection!
  dataShareConsent(where: DataShareConsentWhereUniqueInput!): DataShareConsent
  dataShareConsents(where: DataShareConsentWhereInput, orderBy: DataShareConsentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DataShareConsent]!
  dataShareConsentsConnection(where: DataShareConsentWhereInput, orderBy: DataShareConsentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DataShareConsentConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  contractor(where: ContractorSubscriptionWhereInput): ContractorSubscriptionPayload
  dataShareConsent(where: DataShareConsentSubscriptionWhereInput): DataShareConsentSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  avatar: String
  role: UserType!
  contractor(where: ContractorWhereInput, orderBy: ContractorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Contractor!]
  createdBy(where: DataShareConsentWhereInput, orderBy: DataShareConsentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DataShareConsent!]
  updatedBy(where: DataShareConsentWhereInput, orderBy: DataShareConsentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DataShareConsent!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  avatar: String
  role: UserType
  contractor: ContractorCreateManyWithoutUserInput
  createdBy: DataShareConsentCreateManyWithoutCreatedByInput
  updatedBy: DataShareConsentCreateManyWithoutUpdatedByInput
}

input UserCreateManyWithoutContractorInput {
  create: [UserCreateWithoutContractorInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutCreatedByInput {
  create: UserCreateWithoutCreatedByInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutUpdatedByInput {
  create: UserCreateWithoutUpdatedByInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutContractorInput {
  email: String!
  password: String!
  name: String!
  avatar: String
  role: UserType
  createdBy: DataShareConsentCreateManyWithoutCreatedByInput
  updatedBy: DataShareConsentCreateManyWithoutUpdatedByInput
}

input UserCreateWithoutCreatedByInput {
  email: String!
  password: String!
  name: String!
  avatar: String
  role: UserType
  contractor: ContractorCreateManyWithoutUserInput
  updatedBy: DataShareConsentCreateManyWithoutUpdatedByInput
}

input UserCreateWithoutUpdatedByInput {
  email: String!
  password: String!
  name: String!
  avatar: String
  role: UserType
  contractor: ContractorCreateManyWithoutUserInput
  createdBy: DataShareConsentCreateManyWithoutCreatedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  avatar_ASC
  avatar_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
  avatar: String
  role: UserType!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

enum UserType {
  ADMIN
  USER
  TEMPUSER
  NEW
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  avatar: String
  role: UserType
  contractor: ContractorUpdateManyWithoutUserInput
  createdBy: DataShareConsentUpdateManyWithoutCreatedByInput
  updatedBy: DataShareConsentUpdateManyWithoutUpdatedByInput
}

input UserUpdateManyWithoutContractorInput {
  create: [UserCreateWithoutContractorInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutContractorInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutContractorInput!]
}

input UserUpdateOneRequiredWithoutCreatedByInput {
  create: UserCreateWithoutCreatedByInput
  update: UserUpdateWithoutCreatedByDataInput
  upsert: UserUpsertWithoutCreatedByInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutUpdatedByInput {
  create: UserCreateWithoutUpdatedByInput
  update: UserUpdateWithoutUpdatedByDataInput
  upsert: UserUpsertWithoutUpdatedByInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutContractorDataInput {
  email: String
  password: String
  name: String
  avatar: String
  role: UserType
  createdBy: DataShareConsentUpdateManyWithoutCreatedByInput
  updatedBy: DataShareConsentUpdateManyWithoutUpdatedByInput
}

input UserUpdateWithoutCreatedByDataInput {
  email: String
  password: String
  name: String
  avatar: String
  role: UserType
  contractor: ContractorUpdateManyWithoutUserInput
  updatedBy: DataShareConsentUpdateManyWithoutUpdatedByInput
}

input UserUpdateWithoutUpdatedByDataInput {
  email: String
  password: String
  name: String
  avatar: String
  role: UserType
  contractor: ContractorUpdateManyWithoutUserInput
  createdBy: DataShareConsentUpdateManyWithoutCreatedByInput
}

input UserUpdateWithWhereUniqueWithoutContractorInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutContractorDataInput!
}

input UserUpsertWithoutCreatedByInput {
  update: UserUpdateWithoutCreatedByDataInput!
  create: UserCreateWithoutCreatedByInput!
}

input UserUpsertWithoutUpdatedByInput {
  update: UserUpdateWithoutUpdatedByDataInput!
  create: UserCreateWithoutUpdatedByInput!
}

input UserUpsertWithWhereUniqueWithoutContractorInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutContractorDataInput!
  create: UserCreateWithoutContractorInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  role: UserType
  role_not: UserType
  role_in: [UserType!]
  role_not_in: [UserType!]
  contractor_every: ContractorWhereInput
  contractor_some: ContractorWhereInput
  contractor_none: ContractorWhereInput
  createdBy_every: DataShareConsentWhereInput
  createdBy_some: DataShareConsentWhereInput
  createdBy_none: DataShareConsentWhereInput
  updatedBy_every: DataShareConsentWhereInput
  updatedBy_some: DataShareConsentWhereInput
  updatedBy_none: DataShareConsentWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    