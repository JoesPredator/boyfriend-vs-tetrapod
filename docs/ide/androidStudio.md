# AndroidStudio

## GitウインドウにLocal Changesタブを表示させる

最近のバージョンからLocal Changesタブが表示されなくなったが表示されるようにしたい。

- settings > pluginsから「Modal Commit Interface」をインストールし有効にする
- settings > Advanced Settings > Version Control で 「Use modal commit interface for Git and Mercurial」を有効にする
- settings > Version Control > Git > 「Enable staging area」を無効にする

[参考 youTrack](https://youtrack.jetbrains.com/articles/SUPPORT-A-1996)
