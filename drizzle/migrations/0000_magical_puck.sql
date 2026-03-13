CREATE TABLE `committees` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`year` integer NOT NULL,
	`body` text(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `exco_members` (
	`committee_id` integer NOT NULL,
	`member_id` integer NOT NULL,
	`role` text NOT NULL,
	`sort_key` integer NOT NULL,
	PRIMARY KEY(`committee_id`, `member_id`),
	FOREIGN KEY (`committee_id`) REFERENCES `committees`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`member_id`) REFERENCES `members`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `members` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(256) NOT NULL,
	`image` text DEFAULT '',
	`linkedin` text DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text(256) NOT NULL,
	`cover_image` text DEFAULT '',
	`content` text DEFAULT '' NOT NULL
);
