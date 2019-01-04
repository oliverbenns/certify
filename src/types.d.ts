declare module "@react-pdf/renderer";

interface User {
  firstName: string;
  lastName: string;
}

interface Credential {
  user: User;
  title: string;
  description: string;
  id: string;
  awardedAt: Date;
}

interface Certificate {
  createdAt: Date;
  credentialId: Pick<Credential, "id">;
  url: string;
}
