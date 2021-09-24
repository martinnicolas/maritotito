# Maritotito

[![Build Status](https://travis-ci.org/martinnicolas/maritotito.svg?branch=master)](https://travis-ci.org/martinnicolas/maritotito) [![Wercker](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md) 

This gem allows you to run client side validations for files size and extension. This is an usefull aproachment for complement server side validations or prevent server configuration.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'maritotito', github: 'martinnicolas/maritotito'
```

And then execute:

    $ bundle

## Usage

Add this line to yout `application.js` file:

	//= require maritotito

In every file field on your form add the onchange attribute with the function `"validateFiles(this);"` and a data attribute with a Hash containing maximum file size and allowed extensions:

```ruby
<%= f.file_field :some_field, onchange: "validateFiles(this);", data: { max_file_size: 2.megabytes, allowed_extensions: ['pdf'] } %>
```

You can add more allowed extensions on the allowed_extensions array:

```ruby
<%= f.file_field :other_field, onchange: "validateFiles(this);", data: { max_file_size: 5.megabytes, allowed_extensions: ['jpg', 'jpeg', 'png'] } %>
```

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/martinnicolas/maritotito. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Maritotito project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/[USERNAME]/maritotito/blob/master/CODE_OF_CONDUCT.md).
