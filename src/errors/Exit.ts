import { Es5BuiltinClass } from '@typescript-plus/builtin-class-decorator';

@Es5BuiltinClass()
export class Exit extends Error {
  constructor(public status: number, public exitMessage?: string) {
    super();
  }
}
