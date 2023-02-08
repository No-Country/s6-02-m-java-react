/*#USER TABLE
INSERT INTO `courses_db`.`users` (`id`, `email`, `name`, `password`, `register_date`) VALUES ('1', 'admin@admin.com', 'admin', 'admin123', '2020-01-24');
INSERT INTO `courses_db`.`users` (`id`, `email`, `name`, `password`, `register_date`) VALUES ('2', 'user@user.com', 'user', 'user123', '2019-05-24');
INSERT INTO `courses_db`.`users` (`id`, `email`, `name`, `password`, `register_date`) VALUES ('3', 'lucas@lopez.com', 'Lucas', 'lucas123', '2022-01-28');

#COURSE TABLE
INSERT INTO `courses_db`.`courses` (`id`, `categories`, `course_description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('1', 'Java', 'description_course', 'EASY', 'image_url', 'Java desde 0', '45');
INSERT INTO `courses_db`.`courses` (`id`, `categories`, `course_description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('2', 'JavaScript', 'description_course', 'EASY', 'image_url', 'JavaScript desde 0', '12');
INSERT INTO `courses_db`.`courses` (`id`, `categories`, `course_description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('3', 'Phyton', 'description_course', 'EASY', 'image_url', 'Phyton desde 0', '22');
INSERT INTO `courses_db`.`courses` (`id`, `categories`, `course_description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('4', 'Java Advanced', 'description_course', 'MEDIUM', 'image_url', 'Java avanzado', '35');
INSERT INTO `courses_db`.`courses` (`id`, `categories`, `course_description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('5', 'SQL', 'description_course', 'MEDIUM', 'image_url', 'SQL Nativo', '15');
INSERT INTO `courses_db`.`courses` (`id`, `categories`, `course_description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('6', 'No-SQL', 'description_course', 'MEDIUM', 'image_url', 'Base de datos no-relacionales', '60');
INSERT INTO `courses_db`.`courses` (`id`, `categories`, `course_description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('7', 'Ruby', 'description_course', 'HARD', 'image_url', 'Aprender Ruby', '22');
INSERT INTO `courses_db`.`courses` (`id`, `categories`, `course_description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('8', 'Kotlin', 'description_course', 'EASY', 'image_url', 'Kotlin para principiantes', '24');
INSERT INTO `courses_db`.`courses` (`id`, `categories`, `course_description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('9', 'React', 'description_course', 'HARD', 'image_url', 'React avanzado', '18');

#USER_COURSE TABLE
INSERT INTO `courses_db`.`users_courses` (`user_id`, `course_id`) VALUES ('1', '1');
INSERT INTO `courses_db`.`users_courses` (`user_id`, `course_id`) VALUES ('2', '3');
INSERT INTO `courses_db`.`users_courses` (`user_id`, `course_id`) VALUES ('2', '2');
INSERT INTO `courses_db`.`users_courses` (`user_id`, `course_id`) VALUES ('3', '4');
INSERT INTO `courses_db`.`users_courses` (`user_id`, `course_id`) VALUES ('4', '4');
INSERT INTO `courses_db`.`users_courses` (`user_id`, `course_id`) VALUES ('3', '1');

#LESSON TABLE
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('1', 0, 'description', '3', 'Fundamentos', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('2', 0, 'description', '1', 'POO-1', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('3', 0, 'description', '2', 'POO-2', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('4', 0, 'description', '5', 'POO-3', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('5', 0, 'description', '2', 'Base de Datos SQL', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('6', 0, 'description', '3', 'introducción a Spring', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('7', 0, 'description', '3', 'SpringBoot', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('8', 0, 'description', '2', 'JDBC', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('9', 0, 'description', '6', 'JPA', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('10', 0, 'description', '12', 'Anotaciones', 'transcription', 'link_video', '1');

INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('11', 0, 'description', '2', 'Node', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('12', 0, 'description', '1', 'npm', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('13', 0, 'description', '2', 'Configurando IDE', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('14', 0, 'description', '5', 'POO-1', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('15', 0, 'description', '5', 'POO-2', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('16', 0, 'description', '6', 'POO-3', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('17', 0, 'description', '9', 'Base de Datos SQL y NO-SQL', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('18', 0, 'description', '9', 'Expess', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('19', 0, 'description', '2', 'Expess avanzado', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('20', 0, 'description', '17', 'Recursos', 'transcription', 'link_video', '2');

INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('21', 0, 'description', '2', 'Intro', 'transcription', 'link_video', '3');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('22', 0, 'description', '1', 'POO-1', 'transcription', 'link_video', '3');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('23', 0, 'description', '2', 'Configurando IDE', 'transcription', 'link_video', '3');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('24', 0, 'description', '5', 'Big Data', 'transcription', 'link_video', '3');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('25', 0, 'description', '5', 'Recursos', 'transcription', 'link_video', '3');

INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('26', 0, 'description', '2', 'Introduccion a Microservicios', 'transcription', 'link_video', '4');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('27', 0, 'description', '3', 'Eureka', 'transcription', 'link_video', '4');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('28', 0, 'description', '3', 'Gateway', 'transcription', 'link_video', '4');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('29', 0, 'description', '2', 'Resilence4j', 'transcription', 'link_video', '4');

INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('30', 0, 'description', '2', 'Sentencias', 'transcription', 'link_video', '5');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('31', 0, 'description', '3', 'SQL Básico', 'transcription', 'link_video', '5');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('32', 0, 'description', '3', 'SQL Avanzado', 'transcription', 'link_video', '5');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('33', 0, 'description', '2', 'Tablas', 'transcription', 'link_video', '5');

INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('34', 0, 'description', '2', 'Intro', 'transcription', 'link_video', '6');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('35', 0, 'description', '1', 'Mongo-DB', 'transcription', 'link_video', '6');

INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('36', 0, 'description', '3', 'Intro', 'transcription', 'link_video', '7');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('37', 0, 'description', '1', 'POO-1', 'transcription', 'link_video', '7');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('38', 0, 'description', '2', 'POO-2', 'transcription', 'link_video', '7');

INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('39', 0, 'description', '3', 'Intro', 'transcription', 'link_video', '8');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('40', 0, 'description', '1', 'Helpers', 'transcription', 'link_video', '8');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('41', 0, 'description', '2', 'POO-1', 'transcription', 'link_video', '8');

INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('42', 0, 'description', '3', 'Fundamentos', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('43', 0, 'description', '1', 'Funciones flecha', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('44', 0, 'description', '2', 'POO-1', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('45', 0, 'description', '5', 'POO-2', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('46', 0, 'description', '2', 'Consumo de APislessons', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('47', 0, 'description', '3', 'introducción React', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('48', 0, 'description', '3', 'Librerias externas', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('49', 0, 'description', '2', 'Componentes', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('50', 0, 'description', '6', 'html', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `completed`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('51', 0, 'description', '12', 'Anotaciones', 'transcription', 'link_video', '9');

#NOTE TABLE
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('1', 'content', 'note title', '1', '3');
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('2', 'content', 'note title', '1', '2');
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('3', 'content', 'note title', '1', '2');
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('4', 'content', 'note title', '2', '2');
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('5', 'content', 'note title', '2', '3');
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('6', 'content', 'note title', '2', '3');
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('7', 'content', 'note title', '3', '1');
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('8', 'content', 'note title', '3', '1');
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('9', 'content', 'note title', '3', '3');
*/