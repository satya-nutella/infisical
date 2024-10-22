// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";



import { TImmutableDBKeys } from "./models";

export const LdapGroupMapsSchema = z.object({
  id: z.string().uuid(),
  ldapConfigId: z.string().uuid(),
  ldapGroupCN: z.string(),
  groupId: z.string().uuid()
});

export type TLdapGroupMaps = z.infer<typeof LdapGroupMapsSchema>;
export type TLdapGroupMapsInsert = Omit<z.input<typeof LdapGroupMapsSchema>, TImmutableDBKeys>;
export type TLdapGroupMapsUpdate = Partial<Omit<z.input<typeof LdapGroupMapsSchema>, TImmutableDBKeys>>;
