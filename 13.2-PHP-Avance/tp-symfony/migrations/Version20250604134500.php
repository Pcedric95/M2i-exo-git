<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250604134500 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE attendee (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE event_attendee (event_id INT NOT NULL, attendee_id INT NOT NULL, INDEX IDX_57BC3CB771F7E88B (event_id), INDEX IDX_57BC3CB7BCFD782A (attendee_id), PRIMARY KEY(event_id, attendee_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE event_attendee ADD CONSTRAINT FK_57BC3CB771F7E88B FOREIGN KEY (event_id) REFERENCES event (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE event_attendee ADD CONSTRAINT FK_57BC3CB7BCFD782A FOREIGN KEY (attendee_id) REFERENCES attendee (id) ON DELETE CASCADE
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE event_attendee DROP FOREIGN KEY FK_57BC3CB771F7E88B
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE event_attendee DROP FOREIGN KEY FK_57BC3CB7BCFD782A
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE attendee
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE event_attendee
        SQL);
    }
}
