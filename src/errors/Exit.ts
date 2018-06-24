import { BuiltinClass } from '@typescript-plus/builtin-class-decorator';

@BuiltinClass()
export class Exit extends Error {
  constructor(public status: number, public exitMessage?: string) {
    super();
  }
}
