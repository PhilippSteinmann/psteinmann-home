--- 
---
<hgroup>
    <h2>
        {% if page.subtitle == "Movie Review" %}
            <em>
        {% endif %}
        {{ page.title }}
        {% if page.subtitle == "Movie Review" %} 
            </em> ({{page.year}})
        {% endif %}
    </h2>
    <h3>{{ page.subtitle }} </h3>
</hgroup>
<time datetime="{{ page.date | date: "%d %B %Y"}}">{{ page.date | date: "%d %B %Y"}} </time>
<div class="article-content">
    {{ content }}
</div>

