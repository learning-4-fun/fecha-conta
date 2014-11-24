task :dev do
	Rake::Task["bower:install"].invoke
	`rails s`
end