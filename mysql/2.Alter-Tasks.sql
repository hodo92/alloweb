-- use sql9244365;

-- ALTER TABLE Task_Status ADD PRIMARY KEY(status_id);
ALTER TABLE Task ADD FOREIGN KEY (user_id) REFERENCES User(user_id);
ALTER TABLE Task ADD FOREIGN KEY (status_id) REFERENCES Task_Status(status_id);


-- ALTER TABLE katalog ADD FOREIGN KEY (`Sprache`) REFERENCES Sprache(`ID`);
-- ALTER TABLE users ADD grade_id SMALLINT UNSIGNED NOT NULL DEFAULT 0;
