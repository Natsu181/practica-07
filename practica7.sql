PGDMP                         y         	   practica7    13.3    13.3     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    24596 	   practica7    DATABASE     e   CREATE DATABASE practica7 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE practica7;
                postgres    false            ?            1259    24599    tareas    TABLE     y   CREATE TABLE public.tareas (
    id integer NOT NULL,
    nombre character varying,
    descripcion character varying
);
    DROP TABLE public.tareas;
       public         heap    postgres    false            ?            1259    24619    tareas_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.tareas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.tareas_id_seq;
       public          postgres    false    200            ?           0    0    tareas_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.tareas_id_seq OWNED BY public.tareas.id;
          public          postgres    false    201            #           2604    24621 	   tareas id    DEFAULT     f   ALTER TABLE ONLY public.tareas ALTER COLUMN id SET DEFAULT nextval('public.tareas_id_seq'::regclass);
 8   ALTER TABLE public.tareas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    201    200            ?          0    24599    tareas 
   TABLE DATA           9   COPY public.tareas (id, nombre, descripcion) FROM stdin;
    public          postgres    false    200   6
       ?           0    0    tareas_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.tareas_id_seq', 5, true);
          public          postgres    false    201            %           2606    24629    tareas tareas_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.tareas
    ADD CONSTRAINT tareas_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.tareas DROP CONSTRAINT tareas_pkey;
       public            postgres    false    200            ?   M   x?3????H?SHNL*J-J??*M??2??HLN-R((?O/J?ML????H?+I????2?̆(3E?[?ZD\1z\\\ &??     