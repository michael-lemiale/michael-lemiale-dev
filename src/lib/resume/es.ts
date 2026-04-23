export const resume = {
	name: 'Michael Lemiale',
	title: 'Staff Data Engineer',
	contact: {
		email: 'michael.lemiale@gmail.com',
		website: 'www.michael-lemiale.dev',
		phoneUS: '+1 240.281.9090',
		phoneFR: '+33 06 98 84 62 69',
		citizenship: 'Ciudadano franco-estadounidense'
	},
	summary:
		'Staff Data Engineer con más de 8 años de experiencia diseñando plataformas de datos escalables, construyendo pipelines de producción y liderando equipos de datos de alto rendimiento. Trayectoria comprobada en la consolidación de entornos complejos de data warehouse, implementación de mejores prácticas de CI/CD y despliegue de infraestructura que permite a las organizaciones tomar decisiones basadas en datos.',
	experience: [
		{
			company: 'Articulate',
			description:
				'Líder del mercado de e-learning, desarrollando aplicaciones de formación en línea para una clientela global que incluye todas las empresas del Fortune 100.',
			roles: [
				{
					title: 'Staff Data Engineer',
					dates: 'Ene 2025 – Presente',
					bullets: [
						'Arquitectura y despliegue de pipelines **Dagster** en **Kubernetes** con **sling** y **Terraform**, transmitiendo millones de filas diarias desde PostgreSQL a Snowflake — completamente auto-alojado y versionado',
						'Construcción de pipelines de ingesta personalizados con **Dagster** y **dlt** para extraer datos de APIs de terceros y servicios internos hacia Snowflake',
						'Despliegue de una instancia auto-alojada de **Metabase**, democratizando el acceso a datos para ingenieros de producto',
						'Entrega de **integraciones MCP** en Omni, Snowflake y Metabase — permitiendo a los equipos usar IA para consultar la infraestructura de datos',
						'Definición de la estrategia de IA del equipo de datos y representación en el comité directivo de ingeniería'
					]
				},
				{
					title: 'Senior Data Engineer',
					dates: 'Ene 2023 – Ene 2025',
					bullets: [
						'Liderazgo de la migración y consolidación de dos entornos de data warehouse desde **BigQuery** y **Redshift** a **Snowflake**, mejorando la escalabilidad y reduciendo tiempos de consulta en un 40%',
						'Mentoría de 3 analytics engineers y 2 data analysts, proporcionando orientación transversal en iniciativas prioritarias',
						'Implementación del framework CI/CD con **GitHub Actions**, **Terraform** y **dbt**, estandarizando las prácticas de despliegue',
						'Diseño de pipelines incrementales ingiriendo cientos de terabytes desde decenas de APIs y bases de datos con **Python**, **dlt**, **Dagster** y **sling**',
						'Construcción de herramientas de desarrollo local rápido, reduciendo el tiempo de configuración a 20 minutos'
					]
				}
			]
		},
		{
			company: 'The Zebra',
			description:
				'Marketplace de comparación de seguros en línea con sede en Austin, Texas — simplificando la comparación de cotizaciones de más de 200 aseguradoras.',
			roles: [
				{
					title: 'Senior Analytics Engineer',
					dates: 'May 2020 – Ene 2023',
					bullets: [
						'Dirección de la transición a una arquitectura modular de data warehouse, reduciendo los costos operativos de **Snowflake** en un 25%',
						'Co-diseño de un framework de pruebas unitarias SQL con el equipo de Data Engineering, aumentando la confianza en los despliegues',
						'Construcción de un framework de pruebas de regresión garantizando la integridad de datos históricos durante los despliegues'
					]
				},
				{
					title: 'Analytics Engineer II',
					dates: 'May 2018 – May 2020',
					bullets: [
						'Migración de modelos de datos de Looker a **dbt**, reduciendo tiempos de construcción en un 50% con estrategias de materialización incremental',
						'Automatización de importaciones manuales de Excel con pipelines escalables, eliminando 40 horas de trabajo manual por mes',
						'Liderazgo de la transición de herramientas ETL de Alooma a **Fivetran**, optimizando la ingesta de decenas de fuentes de datos'
					]
				}
			]
		},
		{
			company: 'Under Armour',
			description:
				'Gigante estadounidense del sportswear de $2.8B con sede en Baltimore, Maryland.',
			roles: [
				{
					title: 'BI Developer',
					dates: 'May 2017 – May 2018',
					bullets: [
						'Construcción y mantenimiento de modelos de datos en **SAP HANA**, apoyando iniciativas críticas de BI',
						'Creación de datasets estandarizados de reporting en **Tableau** y **Business Objects**'
					]
				},
				{
					title: 'Data Analyst',
					dates: 'Nov 2016 – May 2017',
					bullets: [
						'Colaboración con consultores SAP ERP para traducir modelos legacy al nuevo entorno **SAP HANA**',
						'Construcción de modelos de datos single-source-of-truth y hubs analíticos front-end'
					]
				}
			]
		}
	],
	education: {
		school: 'University of Maryland, College Park',
		dates: 'Ago 2012 – May 2016',
		degrees: [
			'Bachelor of Science — Sistemas de Información',
			'Bachelor of Science — Finanzas'
		]
	},
	skills: {
		programming: 'SQL, Python, Go, JavaScript, TypeScript',
		frameworks:
			'dbt, Jinja, Fivetran, Stitch, sling, dlt, Dagster, Prefect, Airflow, Terraform, Kubernetes, GitHub Actions, GitLab Pipelines',
		cloud: 'AWS, GCP',
		analytics: 'Omni, Looker, Tableau, Power BI, Mode, Metabase',
		databases: 'Snowflake, Redshift, BigQuery, PostgreSQL, MySQL, SQL Server',
		languages: 'Inglés — Nativo, Francés — Fluido, Español — Avanzado'
	}
};
