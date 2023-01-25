import type { MigrationContext, MigrationInterface } from '@db/types';

export class MakeStoppedAtNullable1607431743768 implements MigrationInterface {
	async up({ queryRunner, tablePrefix }: MigrationContext) {
		await queryRunner.query(
			'ALTER TABLE ' + tablePrefix + 'execution_entity ALTER COLUMN "stoppedAt" DROP NOT NULL',
		);
	}

	async down() {
		// Cannot be undone as column might already have null values
	}
}
