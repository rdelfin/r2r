(function() {var implementors = {};
implementors["serde_json"] = [{"text":"impl&lt;'de, R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"serde_json/struct.StreamDeserializer.html\" title=\"struct serde_json::StreamDeserializer\">StreamDeserializer</a>&lt;'de, R, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"serde_json/de/trait.Read.html\" title=\"trait serde_json::de::Read\">Read</a>&lt;'de&gt; + Fused,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":["serde_json::de::StreamDeserializer"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Iter.html\" title=\"struct serde_json::map::Iter\">Iter</a>&lt;'a&gt;","synthetic":false,"types":["serde_json::map::Iter"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.IterMut.html\" title=\"struct serde_json::map::IterMut\">IterMut</a>&lt;'a&gt;","synthetic":false,"types":["serde_json::map::IterMut"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.IntoIter.html\" title=\"struct serde_json::map::IntoIter\">IntoIter</a>","synthetic":false,"types":["serde_json::map::IntoIter"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Keys.html\" title=\"struct serde_json::map::Keys\">Keys</a>&lt;'a&gt;","synthetic":false,"types":["serde_json::map::Keys"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Values.html\" title=\"struct serde_json::map::Values\">Values</a>&lt;'a&gt;","synthetic":false,"types":["serde_json::map::Values"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.ValuesMut.html\" title=\"struct serde_json::map::ValuesMut\">ValuesMut</a>&lt;'a&gt;","synthetic":false,"types":["serde_json::map::ValuesMut"]}];
implementors["slab"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"slab/struct.IntoIter.html\" title=\"struct slab::IntoIter\">IntoIter</a>&lt;T&gt;","synthetic":false,"types":["slab::IntoIter"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"slab/struct.Iter.html\" title=\"struct slab::Iter\">Iter</a>&lt;'_, T&gt;","synthetic":false,"types":["slab::Iter"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"slab/struct.IterMut.html\" title=\"struct slab::IterMut\">IterMut</a>&lt;'_, T&gt;","synthetic":false,"types":["slab::IterMut"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"slab/struct.Drain.html\" title=\"struct slab::Drain\">Drain</a>&lt;'_, T&gt;","synthetic":false,"types":["slab::Drain"]}];
implementors["widestring"] = [{"text":"impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"widestring/iter/struct.DecodeUtf16Lossy.html\" title=\"struct widestring::iter::DecodeUtf16Lossy\">DecodeUtf16Lossy</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.u16.html\">u16</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>,&nbsp;</span>","synthetic":false,"types":["widestring::iter::DecodeUtf16Lossy"]},{"text":"impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"widestring/iter/struct.DecodeUtf32.html\" title=\"struct widestring::iter::DecodeUtf32\">DecodeUtf32</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>,&nbsp;</span>","synthetic":false,"types":["widestring::iter::DecodeUtf32"]},{"text":"impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"widestring/iter/struct.DecodeUtf32Lossy.html\" title=\"struct widestring::iter::DecodeUtf32Lossy\">DecodeUtf32Lossy</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.57.0/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a>,&nbsp;</span>","synthetic":false,"types":["widestring::iter::DecodeUtf32Lossy"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"widestring/iter/struct.Utf16Chars.html\" title=\"struct widestring::iter::Utf16Chars\">Utf16Chars</a>&lt;'a&gt;","synthetic":false,"types":["widestring::iter::Utf16Chars"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"widestring/iter/struct.Utf32Chars.html\" title=\"struct widestring::iter::Utf32Chars\">Utf32Chars</a>&lt;'a&gt;","synthetic":false,"types":["widestring::iter::Utf32Chars"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"widestring/iter/struct.CharsLossy.html\" title=\"struct widestring::iter::CharsLossy\">CharsLossy</a>&lt;'a&gt;","synthetic":false,"types":["widestring::iter::CharsLossy"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"widestring/iter/struct.Utf16CharIndices.html\" title=\"struct widestring::iter::Utf16CharIndices\">Utf16CharIndices</a>&lt;'a&gt;","synthetic":false,"types":["widestring::iter::Utf16CharIndices"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.57.0/core/iter/traits/marker/trait.FusedIterator.html\" title=\"trait core::iter::traits::marker::FusedIterator\">FusedIterator</a> for <a class=\"struct\" href=\"widestring/iter/struct.Utf16CharIndicesLossy.html\" title=\"struct widestring::iter::Utf16CharIndicesLossy\">Utf16CharIndicesLossy</a>&lt;'a&gt;","synthetic":false,"types":["widestring::iter::Utf16CharIndicesLossy"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()