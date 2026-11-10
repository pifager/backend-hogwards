--
-- PostgreSQL database dump
--


-- Dumped from database version 18.6 (Postgres.app)
-- Dumped by pg_dump version 18.4

-- Started on 2026-11-01 18:05:10 CET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16530)
-- Name: houses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.houses (
    id integer NOT NULL,
    name character varying(50),
    color character varying(50),
    founder character varying(50)
);


--
-- TOC entry 219 (class 1259 OID 16529)
-- Name: houses_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.houses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.houses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 222 (class 1259 OID 16537)
-- Name: students; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.students (
    id integer NOT NULL,
    name character varying(50),
    house character varying(50),
    year character varying(50)
);


--
-- TOC entry 221 (class 1259 OID 16536)
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.students ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.students_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 224 (class 1259 OID 16544)
-- Name: teachers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.teachers (
    id integer NOT NULL,
    name character varying(50),
    house character varying(50)
);


--
-- TOC entry 223 (class 1259 OID 16543)
-- Name: teachers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.teachers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.teachers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3834 (class 0 OID 16530)
-- Dependencies: 220
-- Data for Name: houses; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (1, 'slytherin', 'emerald green and silver', 'salazar slytherin');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (2, 'hufflepuff', 'yellow and black', 'helga hufflepuff');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (3, 'gryffindor', 'scarlet and gold', 'godric gryffindor');
INSERT INTO public.houses OVERRIDING SYSTEM VALUE VALUES (4, 'rawenclaw', 'blue and bronze', 'rowena ravenclaw');


--
-- TOC entry 3836 (class 0 OID 16537)
-- Dependencies: 222
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (1, 'harry potter', 'gryffindor', '4');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (2, 'ronald weasley', 'gryffindor', '4');
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (3, 'draco malfoy', 'slythering', '4');


--
-- TOC entry 3838 (class 0 OID 16544)
-- Dependencies: 224
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (1, 'severus snape', 'slytherin');
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES (2, 'minerva mcgonagall', 'gryffindor');


--
-- TOC entry 3844 (class 0 OID 0)
-- Dependencies: 219
-- Name: houses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.houses_id_seq', 4, true);


--
-- TOC entry 3845 (class 0 OID 0)
-- Dependencies: 221
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.students_id_seq', 3, true);


--
-- TOC entry 3846 (class 0 OID 0)
-- Dependencies: 223
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.teachers_id_seq', 2, true);


--
-- TOC entry 3681 (class 2606 OID 16535)
-- Name: houses houses_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.houses
    ADD CONSTRAINT houses_pkey PRIMARY KEY (id);


--
-- TOC entry 3683 (class 2606 OID 16542)
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- TOC entry 3685 (class 2606 OID 16549)
-- Name: teachers teachers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);


-- Completed on 2026-11-01 18:05:11 CET

--
-- PostgreSQL database dump complete
--
CREATE TABLE public.courses (
  id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name varchar(100) NOT NULL,
  teacher_id integer REFERENCES public.teachers(id) ON DELETE SET NULL
);

INSERT INTO public.courses (name, teacher_id) VALUES
  ('Potions', 1),
  ('Transfiguration', 2);

