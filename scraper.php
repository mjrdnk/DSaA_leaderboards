<?php

require 'vendor/autoload.php';

use Goutte\Client;

$client = new Client();

$crawler = $client->request('GET', 'http://zawody2012.win.ii.pwr.wroc.pl/domjudge/team/scoreboard.php');

$form = $crawler->selectButton('Login')->form();

$crawler = $client->submit($form, array('login' => 'login', 'passwd' => 'pass'));
$crawler = $client->request('GET', 'http://zawody2012.win.ii.pwr.wroc.pl/domjudge/team/scoreboard.php');

$userInfo = $crawler->filter('table.scoreboard tbody tr')->each(function($node, $i) use($client) {
    if($i == 78 || $i == 0) {
        return;
    }

    $user = $node->filter('td.scoretn')->first();

    $userId = substr($user->text(), 1);

    $profileCrawler = $client->request('GET', 
        "http://zawody2012.win.ii.pwr.wroc.pl/domjudge/team/team.php?id=" . $user->text()
    );

    $username = $profileCrawler->filter('td')->eq(5);

    $username = trim(implode(array_reverse(explode(" ", $username->text())), " "));

    $passed     = (int) $node->filter('td.scorenc')->first()->text();
    $totalScore = (int) $node->filter('td.scorett')->first()->text();

    $listMap = [
        "List 1 - All",
        "List 1 - CT",
        "List 1 - PY",
        "List 1 - SQ",
        "List 1 - TR",
        "List 2 - List",
        "List 2 - Queue",
        "List 3",
        "List 4",
        "List 5",
        "List 6",
        "List 7",
    ];

    $listScores = $node->filter('td.score_correct, td.score_incorrect, td.score_neutral')->each(function($listNode, $k) use($listMap) {
        $text = explode(' ', $listNode->text());
        
        return [
            $listMap[$k] => [
                'tries' => array_shift($text),
                'score' => implode($text, ' ')
            ]
        ];
    });

    $new = array();
    foreach($listScores as $value) {
            $new += $value;
    } 

    return [
        'id' => $userId,
        'name' => $username,
        'total_score' => $totalScore,
        'passed' => $passed,
        'lists' => $new
    ];
});

file_put_contents('dsa.json', json_encode(array_filter($userInfo)));
