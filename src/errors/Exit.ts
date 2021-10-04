export class Exit extends Error {
  constructor(public status: number, public exitMessage?: string) {
    super();
  }
}
