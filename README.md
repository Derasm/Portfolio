# personal portfolio project
Has a list of projects I have worked on and a short description of each project.
Has a secondary part with Devops showing behind the scenes look at things.

## Current tasks:
- [x] Create a basic website
- [ ] Add a list of projects
- [ ] Add a list of Devops projects (currently: Azure monitoring, prometheos on cluster, web api on cluster)
- [ ] Add Github Pages
- [ ] Add Build step in .gitlab-ci.yml
- [ ] Add CI/CD
- [ ] Add AWS integration (just to show i can use that one too.)
- [ ] Add monitoring of page on DevOps part
- [ ] Add Testing

## DevOps part:
- [ ] Add a list of Devops projects
- [ ] Add wep api for consumption of data
- [x] Add a database for the data
- [ ] Figure out what kind of data that should be (problaby articles, would be easy.)
- [ ] Add Markdown viewer to articles page, that consumes and shows the articles.
- [ ] Add a way to add articles to the database
- [ ] Add a way to edit articles in the database
- [ ] Add a way to delete articles in the database

## Database stuff:
- [x] Add a database for the data
- [ ] Figure out a schema. Likely: Title, date, tags, content (array of strings), images (array of VarBinary(max))
- [ ] have a table for error logs. Not sure what kinda error logs yet, but could be neat.

Create script:
```sql
CREATE TABLE [dbo].[Articles](
  [Id] [int] IDENTITY(1,1) NOT NULL,
  [Title] [nvarchar](50) NOT NULL,
  [Date] [datetime] NOT NULL,
  [Tags] [nvarchar](50) NOT NULL,
  [Content] [nvarchar](max) NOT NULL,
  [Images] [varbinary](max) NOT NULL,
 CONSTRAINT [PK_Articles] PRIMARY KEY CLUSTERED 
)
```
