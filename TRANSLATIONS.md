---
layout: "page"
lang: "en"
title: Translating dsd.mael.im
permalink: /TRANSLATIONS
---

## Translating dsd.mael.im

We encourage translations of the dsd.mael.im course, the
translations can be hosted in the main site.

## Initial setup

If you are proposing to make a translation please open a
[new issue](https://github.com/MaelImhof/dsd.mael.im/issues) at
GitHub stating the intention and tracking progress, that way other people
contemplating working on the same language will be alerted and so duplication of effort
will be avoided.

The easiest way to develop and test your translation is to fork the
[github repository](https://github.com/MaelImhof/dsd.mael.im/)
and enable github-pages on your fork (You will need to remove the CNAME file from
the top level of the repository as your fork will not be running at dsd.mael.im).


## Adding your language

Once the initial site is working, you can add the new language
files by taking the ISO 639-1 two letter language code for your
language, which we shall assume is `zz`.  It may be necessary to use a
two part name denoting the script, for example `zh-Hans` or `zh-Hant`
(Simplified and Traditional Chinese) as specified in RFC 4646. We hope
to avoid regional variants. For example the `en` pages mostly follow US
usage of English but we do not envisage separate `en-US` and `en-gb`
pages.


1. Make a new directory `zz` as a copy of the English pages in `en`, including the subdirectory `en/includes`
2. Add the two letter code `zz` to the `langs:` array in the `_config.yml` file.
3. Change all instances of `en/` in `zz/index.md` to `zz/`
4. Add a new entry in `_data/languages.yml`. This should specify the
   code, the name of your language in the language and in English, for example
   the French entry is

   ```
   - language-code: fr
     label-regional: Français
     label-english: French
   ```
5. Update each section of `_data/translations.yml` with an entry for
   each of the fixed strings in the site. So for example the entry for "Next Lesson"
   should be amended to have a `zz:` entry:

   ```
   navigational-elements_next:
     de: "Nächste Lektion"
     en: "Next lesson"
     es: "Siguiente lección"
     fr: "Leçon suivante…"
     ja: "次のレッスン"
     mr: "पुढील प्रकरण"
     pt: "Próxima lição"
     vi: "Bài tiếp theo"
     zz: "YOUR TRANSLATION HERE"
   ```

Note that if you want your translation to use localised digits for lesson numbers
you may optionally add an entry to the `navigational-elements_digits` array
with a string consisting of a comma separated list of numbers 0--20.
(See the Marathi example in the file.)


At this point your language should appear in the drop down menu to
select languages, and the navigation between pages. Obviously the main
text is still English!


## Translating the pages

## File Encoding
Please ensure that all pages are in UTF-8 not a legacy encoding such
as ISO-8859-1. The Jekyll template system will fail to update the
entire site if any page is not valid UTF-8.

## Page metadata
At the top of each page is a yaml block (between `---` lines) with five variables set for example
```
---
layout: "lesson"
lang: "en"
title: "Using document classes to influence design"
description: "This lesson explains what a document class is and how it can influence a document layout, and lists the main classes you can find in a TeX distribution."
toc-anchor-text: "Document classes"
toc-description: "Setting the general document layout."
---
```

The variable names should not be changed but the values should be changed to your language code (`zz` in this example). 

 * `title` is used on this page for the title,
 * `description`, is used below the title
 * `toc-anchor-text` and `toc-description` are used in the annotated
   table of contents for the top level dsd.mael.im/zz page.

## Lesson text.

We ask that translations are fairly literal translations of the
English text.  The intention is that the structure of the course and
order and depth that subjects are introduced are the same for all the
languages hosted on the site.

If you would rather use a different course structure but wish to use the
hosting mechanisms that have been developed at dsd.mael.im that is also
possible, all the code is open source, however in that case we request that you
use a separate URL to host the course.

For the examples themselves there are two approaches possible.

### English examples

You may wish to keep the example texts unchanged but just translate
the descriptive texts.

## Merging back to dsd.mael.im

When you are ready you can restore the CNAME file, and then make a
pull request using the GitHub site to request the files are added to
the main site.

At this point you can close the initial issue raised that flagged your
intention to provide a translation.

## Making changes after the files have been merged

If you need to make changes later, either to improve the translation,
or because the English text has been updated, then the same basic system
should be used. Make the edits in the forked copy then make a pull request to
have the changes made in the main site.