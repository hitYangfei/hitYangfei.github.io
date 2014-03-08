---
layout: post
title: "How to: Use Sass in Jekyll"
excerpt: Spice up your css with some Sass while blogging in Jekyll
---
Who writes CSS any more, right? I like the idea of a CSS pre-processor, it helps to keep my stylesheets 'DRY'. One of the popular stylesheet pre-processor is Sass.

By default the *Jekyll* engine uses vanilla css, but Sass support can be easily added. This entails writing a jekyll plugin! seems scary? No worries, it is actually quite simple really, follow along:

Pre-requsites:

* Install the Sass gem first, just run `gem install sass`

Now, all that is left to do is to create a `converter` plugin. Plugins go into the `_plugins` directory (create one if it does not exist); create a file here named `sass_converter.rb` and paste the following code:

{% highlight ruby %}
module Jekyll
  require 'sass'
  class SassConverter < Converter
    safe true
    priority :low

    def matches(ext)
      ext =~ /scss/i
    end

    def output_ext(ext)
      ".css"
    end

    def convert(content)
      begin
        puts "Converting sass to css..."
        engine = Sass::Engine.new(content, :syntax => :scss)
        engine.render
      rescue StandardError => e
        puts "Conversion error: " + e.message
      end
    end
  end
end
{% endhighlight %}

By now you are thinking 'Hmm... I pasted in a bunch of code, what does it do?' Well, basically you are providing additional functionality to Jekyll saying that if you encounter files with extension `scss` then run it through the `SassConverter`. The `convert` function gets the `content` passed to it which inturn is passed to the Sass engine to render. So, the final output will be sassy css converted to vanilla css that browsers understand.
