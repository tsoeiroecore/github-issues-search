const issuesFixture = {
    "total_count": 2,
    "incomplete_results": false,
    "items": [
        {
            "url": "https://api.github.com/repos/facebook/react-native/issues/25494",
            "repository_url": "https://api.github.com/repos/facebook/react-native",
            "labels_url": "https://api.github.com/repos/facebook/react-native/issues/25494/labels{/name}",
            "comments_url": "https://api.github.com/repos/facebook/react-native/issues/25494/comments",
            "events_url": "https://api.github.com/repos/facebook/react-native/issues/25494/events",
            "html_url": "https://github.com/facebook/react-native/issues/25494",
            "id": 464204117,
            "node_id": "MDU6SXNzdWU0NjQyMDQxMTc=",
            "number": 25494,
            "title": "signal 11 (SIGSEGV), code 1 (SEGV_MAPERR) libjsc.so still occuring on Caterpillar S41 (Android 8.0)",
            "user": {
                "login": "ebaynaud",
                "id": 1921301,
                "node_id": "MDQ6VXNlcjE5MjEzMDE=",
                "avatar_url": "https://avatars.githubusercontent.com/u/1921301?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/ebaynaud",
                "html_url": "https://github.com/ebaynaud",
                "followers_url": "https://api.github.com/users/ebaynaud/followers",
                "following_url": "https://api.github.com/users/ebaynaud/following{/other_user}",
                "gists_url": "https://api.github.com/users/ebaynaud/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/ebaynaud/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/ebaynaud/subscriptions",
                "organizations_url": "https://api.github.com/users/ebaynaud/orgs",
                "repos_url": "https://api.github.com/users/ebaynaud/repos",
                "events_url": "https://api.github.com/users/ebaynaud/events{/privacy}",
                "received_events_url": "https://api.github.com/users/ebaynaud/received_events",
                "type": "User",
                "site_admin": false
            },
            "labels": [
                {
                    "id": 1304117544,
                    "node_id": "MDU6TGFiZWwxMzA0MTE3NTQ0",
                    "url": "https://api.github.com/repos/facebook/react-native/labels/Bug",
                    "name": "Bug",
                    "color": "ffffff",
                    "default": false,
                    "description": ""
                },
                {
                    "id": 870851515,
                    "node_id": "MDU6TGFiZWw4NzA4NTE1MTU=",
                    "url": "https://api.github.com/repos/facebook/react-native/labels/Platform:%20Android",
                    "name": "Platform: Android",
                    "color": "bfd4f2",
                    "default": false,
                    "description": "Android applications."
                }
            ],
            "state": "open",
            "locked": false,
            "assignee": null,
            "assignees": [],
            "milestone": null,
            "comments": 129,
            "created_at": "2019-07-04T10:59:45Z",
            "updated_at": "2021-03-09T07:31:46Z",
            "closed_at": null,
            "author_association": "NONE",
            "active_lock_reason": null,
            "body": "Same as https://github.com/facebook/react-native/issues/24261 but still occuring on device Caterpillar S41 (Android 8.0).\r\n\r\nReact Native version: 0.59.10\r\n\r\n```\r\n*** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***\r\npid: 0, tid: 0 >>> com.myapp <<<\r\n\r\nbacktrace:\r\n  #00  pc 00000000000f7748  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so\r\n  #01  pc 0000000000143fe8  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so\r\n  #02  pc 000000000012f0a8  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so\r\n  #03  pc 0000000000139484  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so\r\n  #04  pc 000000000013900c  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so\r\n  #05  pc 00000000001fb9c4  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so\r\n  #06  pc 00000000001f8e90  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so\r\n  #07  pc 00000000001f96bc  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so\r\n  #08  pc 00000000001e41a0  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so\r\n  #09  pc 00000000006171ec  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so\r\n  #10  pc 0000000000617950  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so\r\n  #11  pc 000000000060de7c  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so\r\n  #12  pc 000000000061b084  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so\r\n  #13  pc 0000000000646dc8  /data/app/com.myapp-Fgc_pnA5bQP7DCgIn51TQQ==/lib/arm64/libjsc.so\r\n  #14  pc 0000000000066f34  /system/lib64/libc.so (_ZL15__pthread_startPv+36)\r\n  #15  pc 000000000001eb94  /system/lib64/libc.so (__start_thread+68)\r\n```",
            "performed_via_github_app": null,
            "score": 1.0
        },
        {
            "url": "https://api.github.com/repos/facebook/flow/issues/5879",
            "repository_url": "https://api.github.com/repos/facebook/flow",
            "labels_url": "https://api.github.com/repos/facebook/flow/issues/5879/labels{/name}",
            "comments_url": "https://api.github.com/repos/facebook/flow/issues/5879/comments",
            "events_url": "https://api.github.com/repos/facebook/flow/issues/5879/events",
            "html_url": "https://github.com/facebook/flow/issues/5879",
            "id": 300389188,
            "node_id": "MDU6SXNzdWUzMDAzODkxODg=",
            "number": 5879,
            "title": "Intersection between $Shape and regular object generates false errors",
            "user": {
                "login": "anru",
                "id": 130013,
                "node_id": "MDQ6VXNlcjEzMDAxMw==",
                "avatar_url": "https://avatars.githubusercontent.com/u/130013?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/anru",
                "html_url": "https://github.com/anru",
                "followers_url": "https://api.github.com/users/anru/followers",
                "following_url": "https://api.github.com/users/anru/following{/other_user}",
                "gists_url": "https://api.github.com/users/anru/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/anru/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/anru/subscriptions",
                "organizations_url": "https://api.github.com/users/anru/orgs",
                "repos_url": "https://api.github.com/users/anru/repos",
                "events_url": "https://api.github.com/users/anru/events{/privacy}",
                "received_events_url": "https://api.github.com/users/anru/received_events",
                "type": "User",
                "site_admin": false
            },
            "labels": [
                {
                    "id": 1198884277,
                    "node_id": "MDU6TGFiZWwxMTk4ODg0Mjc3",
                    "url": "https://api.github.com/repos/facebook/flow/labels/Typing:%20destructors",
                    "name": "Typing: destructors",
                    "color": "ace87a",
                    "default": false,
                    "description": ""
                }
            ],
            "state": "open",
            "locked": false,
            "assignee": null,
            "assignees": [],
            "milestone": null,
            "comments": 2,
            "created_at": "2018-02-26T20:44:58Z",
            "updated_at": "2020-12-01T07:07:12Z",
            "closed_at": null,
            "author_association": "NONE",
            "active_lock_reason": null,
            "body": "[TRY](https://flow.org/try/#0PTAEAEDMBsHsHcBQiAuBPADgU1AIQIYDOOAvKAN6KiiEBcNKATgJYB2A5gDRWiv2sBXALYAjLI24BfZOmygAKqDKVqAD37CxjRJNAAyUABIAygAt82ADwFiAPmQBjWK0IpQKeouU86oAOQAJpDsftxq9ACMAMxRUkA)\r\n\r\n\r\n```es6\r\n// @flow\r\n\r\ntype Base = {\r\n  s: string,\r\n  n: number,\r\n}\r\n\r\ntype T = {\r\n  x: number\r\n} & $Shape<Base>\r\n\r\nconst t: T = {\r\n  s: 'dfg',\r\n  x: 133,\r\n}\r\n```\r\n\r\nIn case of usage intersection between regular object type and $Shape object, flow says `x is missing in object literal`, but obviously `x` is present.\r\n\r\nPossible related issue #5702",
            "performed_via_github_app": null,
            "score": 1.0
        }
    ]
}

module.exports = {
    issuesFixture
}