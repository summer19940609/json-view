    #!/System/Library/Frameworks/Ruby.framework/Versions/Current/usr/bin/ruby

    require "uri"

    url = "https://www.json.cn/?json={query}"
    query = ENV['POPCLIP_TEXT']
    url.sub!(/\{query\}/,URI.escape(query, Regexp.new("[^#{URI::PATTERN::UNRESERVED}]")))

    %x{open "#{url}"}
