CREATE TABLE `solarData` (
	`id` text PRIMARY KEY NOT NULL,
	`timestamp` integer NOT NULL,
	`yieldHourly` integer NOT NULL,
	`currentYield` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `solarData_id_unique` ON `solarData` (`id`);