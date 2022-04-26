import {HarnessWith, withPredicate} from '@taiga-ui/testing/utils';

import {TuiLoaderHarness} from '../loader/loader.harness';

@withPredicate
export class TuiButtonHarness extends HarnessWith<TuiButtonHarness>('[tuiButton]') {
    private readonly loader = this.locatorForOptional(TuiLoaderHarness);

    async isLoading(): Promise<boolean> {
        return !!(await this.loader());
    }
}