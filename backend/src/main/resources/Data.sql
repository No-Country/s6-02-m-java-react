--#USER TABLE
INSERT INTO `courses_db`.`users` (`id`, `email`, `name`, `lastname`, `password`, `register_date`) VALUES ('1', 'admin@admin.com', 'admin', 'admin', 'admin123', '2020-01-24');
INSERT INTO `courses_db`.`users` (`id`, `email`, `name`, `lastname`, `password`, `register_date`) VALUES ('2', 'user@user.com', 'user', 'user', 'user123', '2019-05-24');
INSERT INTO `courses_db`.`users` (`id`, `email`, `name`, `lastname`, `password`, `register_date`) VALUES ('3', 'lucas@lopez.com', 'Lucas', 'Lucas', 'lucas123', '2022-01-28');

--#COURSE TABLE
INSERT INTO `courses_db`.`courses` (`id`, `category`, `description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('1', 'BACK_END', 'description_course', 'BASIC', 'image_url', 'Java desde 0', '45');
INSERT INTO `courses_db`.`courses` (`id`, `category`, `description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('2', 'FRONT_END', 'description_course', 'BASIC', 'image_url', 'JavaScript desde 0', '12');
INSERT INTO `courses_db`.`courses` (`id`, `category`, `description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('3', 'BACK_END', 'description_course', 'BASIC', 'image_url', 'Phyton desde 0', '22');
INSERT INTO `courses_db`.`courses` (`id`, `category`, `description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('4', 'BACK_END', 'description_course', 'INTERMEDIATE', 'image_url', 'Java avanzado', '35');
INSERT INTO `courses_db`.`courses` (`id`, `category`, `description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('5', 'BACK_END', 'description_course', 'INTERMEDIATE', 'image_url', 'SQL Nativo', '15');
INSERT INTO `courses_db`.`courses` (`id`, `category`, `description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('6', 'BACK_END', 'description_course', 'INTERMEDIATE', 'image_url', 'Base de datos no-relacionales', '60');
INSERT INTO `courses_db`.`courses` (`id`, `category`, `description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('7', 'BACK_END', 'description_course', 'ADVANCED', 'image_url', 'Aprender Ruby', '22');
INSERT INTO `courses_db`.`courses` (`id`, `category`, `description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('8', 'BACK_END', 'description_course', 'BASIC', 'image_url', 'Kotlin para principiantes', '24');
INSERT INTO `courses_db`.`courses` (`id`, `category`, `description`, `difficulty`, `image_url`, `title`, `total_duration`) VALUES ('9', 'FRONT_END', 'description_course', 'ADVANCED', 'image_url', 'React avanzado', '18');

--#USER_COURSE TABLE
INSERT INTO `courses_db`.`users_courses` (`user_id`, `course_id`) VALUES ('1', '1');
INSERT INTO `courses_db`.`users_courses` (`user_id`, `course_id`) VALUES ('2', '3');
INSERT INTO `courses_db`.`users_courses` (`user_id`, `course_id`) VALUES ('2', '2');
INSERT INTO `courses_db`.`users_courses` (`user_id`, `course_id`) VALUES ('3', '4');
INSERT INTO `courses_db`.`users_courses` (`user_id`, `course_id`) VALUES ('3', '1');

--#LESSON TABLE
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('1', 'description', '3', 'Fundamentos', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('2', 'description', '1', 'POO-1', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('3', 'description', '2', 'POO-2', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('4', 'description', '5', 'POO-3', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('5', 'description', '2', 'Base de Datos SQL', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('6', 'description', '3', 'introducción a Spring', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('7', 'description', '3', 'SpringBoot', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('8', 'description', '2', 'JDBC', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('9', 'description', '6', 'JPA', 'transcription', 'link_video', '1');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('10', 'description', '12', 'Anotaciones', 'transcription', 'link_video', '1');

INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('11', 'description', '2', 'Node', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('12', 'description', '1', 'npm', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('13', 'description', '2', 'Configurando IDE', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('14', 'description', '5', 'POO-1', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('15', 'description', '5', 'POO-2', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('16', 'description', '6', 'POO-3', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('17', 'description', '9', 'Base de Datos SQL y NO-SQL', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('18', 'description', '9', 'Expess', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('19', 'description', '2', 'Expess avanzado', 'transcription', 'link_video', '2');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('20', 'description', '17', 'Recursos', 'transcription', 'link_video', '2');

INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('21', 'description', '2', 'Intro', 'transcription', 'link_video', '3');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('22', 'description', '1', 'POO-1', 'transcription', 'link_video', '3');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('23', 'description', '2', 'Configurando IDE', 'transcription', 'link_video', '3');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('24', 'description', '5', 'Big Data', 'transcription', 'link_video', '3');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('25', 'description', '5', 'Recursos', 'transcription', 'link_video', '3');

INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('26', 'description', '2', 'Introduccion a Microservicios', 'transcription', 'link_video', '4');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('27', 'description', '3', 'Eureka', 'transcription', 'link_video', '4');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('28', 'description', '3', 'Gateway', 'transcription', 'link_video', '4');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('29', 'description', '2', 'Resilence4j', 'transcription', 'link_video', '4');

INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('30', 'description', '2', 'Sentencias', 'transcription', 'link_video', '5');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('31', 'description', '3', 'SQL Básico', 'transcription', 'link_video', '5');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('32', 'description', '3', 'SQL Avanzado', 'transcription', 'link_video', '5');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('33', 'description', '2', 'Tablas', 'transcription', 'link_video', '5');

INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('34', 'description', '2', 'Intro', 'transcription', 'link_video', '6');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('35', 'description', '1', 'Mongo-DB', 'transcription', 'link_video', '6');

INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('36', 'description', '3', 'Intro', 'transcription', 'link_video', '7');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('37', 'description', '1', 'POO-1', 'transcription', 'link_video', '7');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('38', 'description', '2', 'POO-2', 'transcription', 'link_video', '7');

INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('39', 'description', '3', 'Intro', 'transcription', 'link_video', '8');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('40', 'description', '1', 'Helpers', 'transcription', 'link_video', '8');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('41', 'description', '2', 'POO-1', 'transcription', 'link_video', '8');

INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('42', 'description', '3', 'Fundamentos', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('43', 'description', '1', 'Funciones flecha', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('44', 'description', '2', 'POO-1', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('45', 'description', '5', 'POO-2', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('46', 'description', '2', 'Consumo de APislessons', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('47', 'description', '3', 'introducción React', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('48', 'description', '3', 'Librerias externas', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('49', 'description', '2', 'Componentes', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('50', 'description', '6', 'html', 'transcription', 'link_video', '9');
INSERT INTO `courses_db`.`lessons` (`id`, `description`, `duration`, `title`, `transcription`, `url_video`, `course_id`) VALUES ('51', 'description', '12', 'Anotaciones', 'transcription', 'link_video', '9');

--#NOTE TABLE
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('1', 'content', 'note title', '1', '3');
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('2', 'content', 'note title', '1', '2');
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('3', 'content', 'note title', '1', '2');
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('4', 'content', 'note title', '2', '2');
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('5', 'content', 'note title', '2', '3');
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('6', 'content', 'note title', '2', '3');
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('7', 'content', 'note title', '3', '1');
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('8', 'content', 'note title', '3', '1');
INSERT INTO `courses_db`.`notes` (`id`, `content`, `title`, `lesson_id`, `user_id`) VALUES ('9', 'content', 'note title', '3', '3');
