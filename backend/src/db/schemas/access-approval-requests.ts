// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";



import { TImmutableDBKeys } from "./models";

export const AccessApprovalRequestsSchema = z.object({
  id: z.string().uuid(),
  policyId: z.string().uuid(),
  privilegeId: z.string().uuid().nullable().optional(),
  requestedBy: z.string().uuid().nullable().optional(),
  isTemporary: z.boolean(),
  temporaryRange: z.string().nullable().optional(),
  permissions: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  requestedByUserId: z.string().uuid()
});

export type TAccessApprovalRequests = z.infer<typeof AccessApprovalRequestsSchema>;
export type TAccessApprovalRequestsInsert = Omit<z.input<typeof AccessApprovalRequestsSchema>, TImmutableDBKeys>;
export type TAccessApprovalRequestsUpdate = Partial<Omit<z.input<typeof AccessApprovalRequestsSchema>, TImmutableDBKeys>>;
