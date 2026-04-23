export const resume = {
	name: 'Michael Lemiale',
	title: 'Staff Data Engineer',
	contact: {
		email: 'michael.lemiale@gmail.com',
		website: 'www.michael-lemiale.dev',
		phoneUS: '+1 240.281.9090',
		phoneFR: '+33 06 98 84 62 69',
		citizenship: 'French & American Citizen'
	},
	summary:
		'Staff Data Engineer with 8+ years of experience designing scalable data platforms, building production-grade pipelines, and leading high-performing data teams. Proven track record of consolidating complex warehouse environments, implementing CI/CD best practices, and shipping infrastructure that empowers entire organizations to make data-driven decisions.',
	experience: [
		{
			company: 'Articulate',
			description:
				'Market leader in e-learning, building online training apps for a global client base including all Fortune 100 companies.',
			roles: [
				{
					title: 'Staff Data Engineer',
					dates: 'Jan 2025 – Present',
					bullets: [
						'Architected and deployed **Dagster** pipelines on **Kubernetes** with **sling** and **Terraform**, streaming millions of rows daily from PostgreSQL into Snowflake — fully self-hosted and version-controlled',
						'Built custom ingestion pipelines with **Dagster** and **dlt** to pull data from third-party APIs and internal services into Snowflake, eliminating manual data loads',
						'Deployed a self-hosted **Metabase** instance, democratizing data access for product engineers and reducing ad-hoc query requests by the analytics team',
						'Shipped **MCP integrations** across Omni, Snowflake, and Metabase — enabling teams to leverage AI when querying data infrastructure',
						'Defined the data team\'s AI strategy and represented the team on the engineering steering committee'
					]
				},
				{
					title: 'Senior Data Engineer',
					dates: 'Jan 2023 – Jan 2025',
					bullets: [
						'Led migration and consolidation of two data warehouse environments from **BigQuery** and **Redshift** into **Snowflake**, improving scalability with auto-scaling compute and reducing query times by up to 40%',
						'Mentored 3 analytics engineers and 2 data analysts, providing cross-functional guidance on high-priority initiatives',
						'Spearheaded CI/CD framework implementation with **GitHub Actions**, **Terraform**, and **dbt**, standardizing deployment practices and elevating team confidence in releases',
						'Designed incremental pipelines ingesting hundreds of terabytes from dozens of APIs and application databases into the warehouse with **Python**, **dlt**, **Dagster**, and **sling**',
						'Built rapid local development tooling, cutting environment setup time to 20 minutes and accelerating team productivity'
					]
				}
			]
		},
		{
			company: 'The Zebra',
			description:
				'Online insurance comparison marketplace based in Austin, Texas — simplifying the process of comparing quotes from 200+ carriers.',
			roles: [
				{
					title: 'Senior Analytics Engineer',
					dates: 'May 2020 – Jan 2023',
					bullets: [
						'Directed transition to a modular data warehouse architecture, reducing **Snowflake** operational costs by 25%',
						'Co-designed a SQL unit testing framework with Data Engineering, increasing deployment confidence and code coverage across the platform',
						'Built a regression testing framework ensuring historical data integrity during deployments'
					]
				},
				{
					title: 'Analytics Engineer II',
					dates: 'May 2018 – May 2020',
					bullets: [
						'Migrated Looker data models to **dbt**, cutting build times by 50% with incremental and ephemeral materialization strategies',
						'Automated manual Excel imports into the warehouse with scalable pipelines, eliminating 40 hours of manual work per month',
						'Led the transition of ETL tooling from Alooma to **Fivetran**, streamlining ingestion for dozens of data sources'
					]
				}
			]
		},
		{
			company: 'Under Armour',
			description:
				'$2.8B American sportswear powerhouse based in Baltimore, Maryland.',
			roles: [
				{
					title: 'BI Developer',
					dates: 'May 2017 – May 2018',
					bullets: [
						'Built and maintained data models in **SAP HANA**, supporting critical BI initiatives and enabling data-driven reporting across teams',
						'Created standardized reporting datasets in **Tableau** and **Business Objects**, improving access to KPIs'
					]
				},
				{
					title: 'Data Analyst',
					dates: 'Nov 2016 – May 2017',
					bullets: [
						'Partnered with SAP ERP consultants to translate legacy data models into the new **SAP HANA** warehouse environment',
						'Built single-source-of-truth data models and front-end analytics hubs, improving reporting accuracy'
					]
				}
			]
		}
	],
	education: {
		school: 'University of Maryland, College Park',
		dates: 'Aug 2012 – May 2016',
		degrees: [
			'Bachelor of Science — Information Systems',
			'Bachelor of Science — Finance'
		]
	},
	skills: {
		programming: 'SQL, Python, Go, JavaScript, TypeScript',
		frameworks:
			'dbt, Jinja, Fivetran, Stitch, sling, dlt, Dagster, Prefect, Airflow, Terraform, Kubernetes, GitHub Actions, GitLab Pipelines',
		cloud: 'AWS, GCP',
		analytics: 'Omni, Looker, Tableau, Power BI, Mode, Metabase',
		databases: 'Snowflake, Redshift, BigQuery, PostgreSQL, MySQL, SQL Server',
		languages: 'English — Native, French — Fluent, Spanish — Proficient'
	}
};
